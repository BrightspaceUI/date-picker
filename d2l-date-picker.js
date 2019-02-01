/**
`d2l-date-picker`
A Date Picker for D2L Brightspace

@demo demo/index.html
*/

import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/iron-a11y-keys/iron-a11y-keys.js';
import '@polymer/iron-dropdown/iron-dropdown.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker-light.js';

import 'd2l-colors/d2l-colors.js';
import 'd2l-offscreen/d2l-offscreen-shared-styles.js';
import 'd2l-polymer-behaviors/d2l-id.js';
import 'd2l-inputs/d2l-input-shared-styles.js';
import 'fastdom/fastdom.js';
import './d2l-date-picker-behavior.js';
import './d2l-date-picker-style-modules.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
	_template: html`
		<style is="custom-style" include="d2l-input-styles d2l-offscreen-shared-styles">
			:host {
				display: block;
			}
			:host([hide-label]) > label,
			.d2l-date-picker-description {
				@apply --d2l-offscreen;
			}

			:host(:dir(rtl)) :host([hide-label]) > label,
			:host(:dir(rtl)) .d2l-date-picker-description {
				@apply --d2l-offscreen-rtl;
			}
			:host-context([dir="rtl"]) :host([hide-label]) > label,
			:host-context([dir="rtl"]) .d2l-date-picker-description {
				@apply --d2l-offscreen-rtl;
			}

			vaadin-date-picker-light,
			iron-input {
				width: 100%;
			}

			label {
				@apply --d2l-date-picker-label;
			}

			.d2l-input {
				/* Needed because: https://github.com/webcomponents/shadycss/issues/91 */
				font-family: inherit !important;
			}
		</style>

		<label>[[label]]</label>

		<vaadin-date-picker-light min="[[min]]" max="[[max]]" value="{{value}}" on-value-changed="_handleValueChanged">
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
		var input = this.$$('input');
		if (input) {
			this._target = this.$$('input');
		}
	},

	focus: function() {
		var input = this.$$('input');
		if (input) {
			fastdom.mutate(function() {
				input.focus();
			});
		}
	},

	_computedAriaInvalid: function(invalid) {
		return invalid ? 'true' : 'false';
	}
});
