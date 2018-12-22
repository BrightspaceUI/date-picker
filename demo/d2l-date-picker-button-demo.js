
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
	_template: html`
		<style>
			button {
				width: 100%;
			}
		</style>
		<d2l-date-picker value="{{value}}">
			<button >[[_getButtonText(value)]]</button>
		</d2l-date-picker>
`,

	is: 'd2l-date-picker-button-demo',

	properties: {
		value: {
			type: String,
			value: null
		},
		_target: Object
	},
	ready: function() {
		this._target = this.$$('button');
	},
	_getButtonText: function(value) {
		return value || 'Click Me!';
	},
	_onEnter: function(e) {
		this.$$('d2l-date-picker').onEnter(e);
	},
	_onUpDown: function(e) {
		this.$$('d2l-date-picker').onUpDown(e);
	}
});

