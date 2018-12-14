import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
import 'vaadin-date-picker/vaadin-date-picker-styles.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-vaadin-date-picker-polymer1-styles">
	<template>
		<style>
			:host(:not([custom-overlay-style])) vaadin-date-picker-light {
				--vaadin-date-picker-overlay: {
					font-family: inherit;
					max-height: 355px;
				};
			}

			vaadin-date-picker-light {
				--primary-color: var(--d2l-color-celestine);
				--light-primary-color: var(--d2l-color-celestine-plus-1);
				--dark-theme-background-color: var(--d2l-color-ferrite);
				--dark-theme-secondary-color: #ffffff;
				--primary-text-color: var(--d2l-color-ferrite);
				--secondary-text-color: var(--d2l-color-tungsten);

				--vaadin-date-picker-yearscroller: {
					font-family: inherit;
				};
				--vaadin-date-picker-header: {
					font-family: inherit;
				};
				--vaadin-date-picker-calendar-title: {
					font-family: inherit;
				};
				--vaadin-date-picker-calendar-cell: {
					font-family: inherit;
				};
				--vaadin-date-picker-footer: {
					font-family: inherit;
				};
				--vaadin-date-picker-calendar: {
					font-family: inherit;
				};
			}
		</style>
	</template>
</dom-module><dom-module id="d2l-vaadin-overlay-styles" theme-for="vaadin-date-picker-overlay">
	<template>
		<style include="vaadin-date-picker-overlay-default-theme">
			:host {
				max-height: 355px;
				@apply --vaadin-date-picker-overlay;
				font-family: inherit;
			}

			[part~="overlay-header"] {
				background-color: var(--d2l-color-celestine);
				color: white;
			}

			[part~="toolbar"] {
				background: white;
				box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.5);
			}

			[part~="years"] {
				color: white;
				background-color: var(--d2l-color-ferrite);
			}

			[part~="year-separator"] {
				color: var(--d2l-color-tungsten);
			}

			[part~="year-separator"]::after {
				font-size: 5px;
			}

			[part~="years-toggle-button"] {
				background-color: var(--d2l-color-celestine);
				cursor: pointer;
			}
		</style>
	</template>
</dom-module><dom-module id="d2l-vaadin-month-calendar-styles" theme-for="vaadin-month-calendar">
	<template>
		<style include="vaadin-month-calendar-default-theme">
			:host {
				font-family: inherit;
				color: var(--d2l-color-tungsten);
			}

			[part~="date"][today] {
				background-color: transparent;
				color: var(--d2l-color-celestine-plus-1);
			}

			:host([focused]) [part~="date"][focused],
			[part~="date"][focused] {
				background: var(--d2l-color-celestine);
				color: white;
				font-weight: 700;
			}

			[part~="month-header"] {
				color: var(--d2l-color-ferrite);
				font-size: 16px;
				font-weight: 400;
				line-height: 24px;
				font-family: inherit;
			}

			[part~="weekday"] {
				opacity: 1;
				color: var(--d2l-color-ferrite);
				font-size: 12px;
				text-transform: uppercase;
				opacity: 0.8;
			}
		</style>
	</template>
</dom-module><dom-module id="d2l-vaadin-button-styles" theme-for="vaadin-button">
	<template>
		<style>
			:host {
				font-family: inherit;
			}

			[part~="button"] {
				background: none;
				font-family: inherit;
				color: var(--d2l-color-celestine);
				font-size: 14px;
				text-transform: uppercase;
				border: none;
				cursor: pointer;
				font-weight: 500;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);