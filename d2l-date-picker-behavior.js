import '@polymer/polymer/polymer-legacy.js';
import 'fastdom/fastdom.js';
import './localize-behavior.js';
import { getDateTimeDescriptor } from '@brightspace-ui/intl/lib/dateTime.js';
import { getUniqueId } from '@brightspace-ui/core/helpers/uniqueId.js';
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
		value: {
			type: String,
			reflectToAttribute: true,
			notify: true
		},
		customOverlayStyle: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		},
		initialPosition: {
			type: String
		}
	},

	observers: [
		'_updateDatePickeri18n( localize )'
	],

	ready: function() {
		this._descriptionId = getUniqueId();
		this._handleValueChanged = this._handleValueChanged.bind(this);

		this._setUpChangeEventListener();
	},

	detached: function() {
		this._changeListener = null;
	},

	_setUpChangeEventListener: function() {
		// on-value-changed got removed for the Polymer2 version of vaadin-date-picker,
		// so for Polymer2 we'll set our own event
		this.addEventListener('value-changed', this._handleValueChanged);
	},

	_handleValueChanged: function(e) {
		if (e.target === this) {
			this.dispatchEvent(new CustomEvent('d2l-date-picker-value-changed', {
				detail: e.detail,
				bubbles: true
			}));
		}
	},

	_handleTap: function() {
		const datepicker = this.$$('vaadin-date-picker-light');
		if (!datepicker.opened) {
			datepicker._focusOverlayOnOpen = true;
		}
	},

	onEnter: function(e) {
		const datepicker = this.$$('vaadin-date-picker-light');
		if (!datepicker.opened) {
			// A better solution is to add a boolean to the 3rd party open function
			datepicker._focusOverlayOnOpen = true;
			datepicker.open();
			e.detail.keyboardEvent.preventDefault();
			e.detail.keyboardEvent.stopPropagation();
		}

	},

	onUpDown: function(e) {
		const datepicker = this.$$('vaadin-date-picker-light');
		if (!datepicker.opened) {
			e.detail.keyboardEvent.preventDefault();
			e.detail.keyboardEvent.stopPropagation();
		}
	},

	_handleFocus: function(e) {
		// in shady DOM the input's "focus" event does not bubble,
		// so no need to fire it
		if (e.target === this && !useShadow) {
			this.dispatchEvent(new CustomEvent(
				'focus',
				{ bubbles: true, composed: false }
			));
		}
	},

	_updateDatePickeri18n: function() {

		const descriptor = getDateTimeDescriptor();

		const datePicker = this.$$('vaadin-date-picker-light');
		const localeOverrides = {
			monthNames: descriptor.calendar.months.long,
			weekdays: descriptor.calendar.days.long,
			weekdaysShort: descriptor.calendar.days.short,
			firstDayOfWeek: descriptor.calendar.firstDayOfWeek,
			today: this.localize('today'),
			cancel: this.localize('cancel'),
			formatDate: function(date) {
				return this.formatDate(new Date(date.year, date.month, date.day));
			}.bind(this),
			parseDate: function(dateString) {
				try {
					const parsed = this.parseDate(dateString);
					return { day: parsed.getDate(), month: parsed.getMonth(), year: parsed.getFullYear() };
				} catch (exception) {
					return null;
				}
			}.bind(this)
		};
		const datePickerLocale = this._merge(datePicker.i18n, localeOverrides);
		datePicker.i18n = datePickerLocale;
	},

	_merge: function(obj1, obj2) {
		if (obj2 === undefined || obj2 === null || typeof(obj2) !== 'object') {
			return obj1;
		}
		Object.keys(obj2).forEach((i) => {
			// eslint-disable-next-line no-prototype-builtins
			if (obj1.hasOwnProperty(i)) {
				if (typeof(obj2[i]) === 'object' && typeof(obj1[i]) === 'object') {
					this._merge(obj1[i], obj2[i]);
				} else {
					obj1[i] = obj2[i];
				}
			}
		});
		return obj1;
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.DatePicker.DatePickerBehavior */
D2L.PolymerBehaviors.DatePicker.DatePickerBehavior = [
	D2L.PolymerBehaviors.DatePicker.LocalizeBehavior,
	D2L.PolymerBehaviors.DatePicker.DatePickerBehaviorImpl
];
