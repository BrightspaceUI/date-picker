import '@polymer/polymer/polymer-legacy.js';
import 'fastdom/fastdom.js';
// WORKAROUND: polymer-modulizer grabs non-existing Element export from polymer-element
// TODO: Remove Element reference
import { PolymerElement as Element } from '@polymer/polymer/polymer-element.js';
import { useShadow } from '@polymer/polymer/lib/utils/settings.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.DatePicker = window.D2L.PolymerBehaviors.DatePicker || {};

/** @polymerBehavior D2L.PolymerBehaviors.DatePicker.DatePickerBehavior */
D2L.PolymerBehaviors.DatePicker.DatePickerBehaviorImpl = {
	properties: {
		_target: {
			type: Object
		},
		_descriptionId: {
			type: String
		},
		placeholder: {
			type: String
		},
		min: {
			type: String
		},
		max: {
			type: String
		},
		label: {
			type: String
		},
		hideLabel: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		description:{
			type: String
		},
		locale: {
			type: String,
			value: 'en'
		},
		firstDayOfWeek: {
			type: Number,
			value: 0
		},
		value: {
			type: String,
			reflectToAttribute: true,
			notify: true
		},
		customOverlayStyle: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		}
	},

	observers: [
		'_updateDatePickeri18n( locale, localize, firstDayOfWeek )'
	],

	ready: function() {
		this._descriptionId = D2L.Id.getUniqueId();
		this._handleValueChanged = this._handleValueChanged.bind(this);

		if (this._isPolymer2()) {
			this._setUpChangeEventListenerPolymer2();
		}
	},

	attached: function() {
		var buttons = document.getElementsByClassName('vaadin-date-picker-overlay paper-button-0');

		fastdom.mutate(function() {
			for (var i = 0; i < buttons.length; i++) {
				buttons[i].style.fontFamily = 'inherit';
			}
		});
	},

	detached: function() {
		if (this._isPolymer2()) {
			this.removeEventListener('value-changed', this._handleValueChanged);
		}
		this._changeListener = null;
	},

	_setUpChangeEventListenerPolymer2: function() {
		// on-value-changed got removed for the Polymer2 version of vaadin-date-picker,
		// so for Polymer2 we'll set our own event
		this.addEventListener('value-changed', this._handleValueChanged);
	},

	_isPolymer2: function() {
		return !!Element;
	},

	_handleValueChangedPolymer1: function(e) {
		// using the `value-changed` listener sometimes sends 2 events in the
		// Polymer 1 vaadin-date-picker when in shadyDom, so this function listens to
		// on-value-changed from the vaadin-date-picker (removed in Polymer 2)
		if (this._isPolymer2()) {
			return;
		}
		this._handleValueChanged(e);
	},

	_handleValueChanged: function(e) {
		this.dispatchEvent(new CustomEvent('d2l-date-picker-value-changed', {
			detail: e.detail,
			bubbles: true
		}));
	},

	_handleTap: function() {
		var datepicker = this.$$('vaadin-date-picker-light');
		if (!datepicker.opened) {
			datepicker._focusOverlayOnOpen = true;
		}
	},

	onEnter: function(e) {
		var datepicker = this.$$('vaadin-date-picker-light');
		if (!datepicker.opened) {
			// A better solution is to add a boolean to the 3rd party open function
			datepicker._focusOverlayOnOpen = true;
			datepicker.open();
			e.detail.keyboardEvent.preventDefault();
			e.detail.keyboardEvent.stopPropagation();
		}

	},

	onUpDown: function(e) {
		var datepicker = this.$$('vaadin-date-picker-light');
		if (!datepicker.opened) {
			e.detail.keyboardEvent.preventDefault();
			e.detail.keyboardEvent.stopPropagation();
		}
	},

	_handleFocus: function() {
		// in shady DOM the input's "focus" event does not bubble,
		// so no need to fire it
		if (!useShadow) {
			this.dispatchEvent(new CustomEvent(
				'focus',
				{ bubbles: true, composed: false }
			));
		}
	},

	_updateDatePickeri18n: function() {
		var locale = d2lIntl.LocaleProvider(this.locale);

		var datePicker = this.$$('vaadin-date-picker-light');
		var localeOverrides = {
			monthNames: locale.date.calendar.months.long,
			weekdays: locale.date.calendar.days.long,
			weekdaysShort: locale.date.calendar.days.short,
			firstDayOfWeek: this.firstDayOfWeek ? this.firstDayOfWeek : locale.date.calendar.firstDayOfWeek,
			today: this.localize('today'),
			cancel: this.localize('cancel'),
			formatDate: function(date) {
				return this.formatDate(date);
			}.bind(this),
			parseDate: function(dateString) {
				try {
					return this.parseDate(dateString);
				} catch (exception) {
					return null;
				}
			}.bind(this)
		};
		var datePickerLocale = this._merge(datePicker.i18n, localeOverrides);
		datePicker.i18n = {}; // reassign to have Polymer refresh
		datePicker.i18n = datePickerLocale;
	},

	_merge: function(obj1, obj2) {
		if (obj2 === undefined || obj2 === null || typeof(obj2) !== 'object') {
			return obj1;
		}
		Object.keys(obj2).forEach(function(i) {
			if (obj1.hasOwnProperty(i)) {
				if (typeof(obj2[i]) === 'object' && typeof(obj1[i]) === 'object') {
					this._merge(obj1[i], obj2[i]);
				} else {
					obj1[i] = obj2[i];
				}
			}
		}.bind(this));
		return obj1;
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.DatePicker.DatePickerBehavior */
D2L.PolymerBehaviors.DatePicker.DatePickerBehavior = [
	D2L.PolymerBehaviors.DatePicker.DatePickerBehaviorImpl
];