/**
`d2l-date-picker`
A Date Picker for D2L Brightspace

@demo demo/index.html
*/

import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/inputs/d2l-input-shared-styles.js';
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/iron-a11y-keys/iron-a11y-keys.js';
import '@polymer/iron-dropdown/iron-dropdown.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker-light.js';

import 'fastdom/fastdom.js';
import './d2l-date-picker-behavior.js';
import './d2l-date-picker-style-modules.js';

import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
	_template: html`
		<style is="custom-style" include="d2l-input-styles">
			:host {
				display: block;
			}
			:host([hide-label]) > label,
			.d2l-date-picker-description {
				position: absolute !important;
				overflow: hidden;
				width: 1px;
				height: 1px;
				white-space: nowrap;
				left: -10000px;
			}

			:host(:dir(rtl)) :host([hide-label]) > label,
			:host(:dir(rtl)) .d2l-date-picker-description {
				left: 0;
				right: -10000px;
			}
			:host-context([dir="rtl"]) :host([hide-label]) > label,
			:host-context([dir="rtl"]) .d2l-date-picker-description {
				left: 0;
				right: -10000px;
			}

			vaadin-date-picker-light,
			iron-input {
				width: 100%;
			}

			label {
				@apply --d2l-date-picker-label;
			}

			:host([dir="rtl"]) label {
				@apply --d2l-date-picker-label-rtl;
			}

			.d2l-input {
				/* Needed because: https://github.com/webcomponents/shadycss/issues/91 */
				font-family: inherit !important;
			}
		</style>

		<label>[[label]]</label>

		<vaadin-date-picker-light min="[[min]]" max="[[max]]" value="{{value}}" on-value-changed="_handleValueChanged" initial-position="[[initialPosition]]">
			<iron-a11y-keys target="[[_target]]" keys="enter" on-keys-pressed="onEnter"></iron-a11y-keys>
			<iron-a11y-keys target="[[_target]]" keys="up down" on-keys-pressed="onUpDown"></iron-a11y-keys>

			<iron-input>
				<slot>
					<input
						on-tap="_handleTap"
						placeholder="{{placeholder}}"
						class="d2l-input"
						type="text"
						on-focus="_handleFocus"
						aria-describedby$="[[_descriptionId]]"
						aria-label$="[[label]]"
						aria-invalid$="[[_computedAriaInvalid(invalid)]]">
					<div id="[[_descriptionId]]" class="d2l-date-picker-description">{{description}}</div>
				</slot>
			</iron-input>
		</vaadin-date-picker-light>
`,

	is: 'd2l-date-picker',

	behaviors: [
		D2L.PolymerBehaviors.DatePicker.DatePickerBehavior
	],

	properties: {
		invalid: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		}
	},

	ready: function() {
		const input = this.$$('input');
		if (input) {
			this._target = this.$$('input');
		}
	},

	focus: function() {
		const input = this.$$('input');
		if (input) {
			fastdom.mutate(() => {
				input.focus();
			});
		}
	},

	_computedAriaInvalid: function(invalid) {
		return invalid ? 'true' : 'false';
	}
});
