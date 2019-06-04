
import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

var $_documentContainer = html`<dom-module id="d2l-vaadin-overlay-content-styles" theme-for="vaadin-date-picker-overlay vaadin-date-picker-overlay-content">
	<template>
		<style>
			:host {
				box-shadow: none;
				font-family: inherit;
			}
			[part="overlay"] {
				max-height: 355px;
				width: 420px;
			}
			[part~="overlay-header"] {
				background-color: var(--d2l-color-celestine);
				color: white;
			}

			[part~="toolbar"] {
				background: white;
				box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.5);
				margin-right: 0;
			}

			[part~="months"] {
				-webkit-mask-image: none;
			}

			[part~="years"] {
				color: white;
				background-color: var(--d2l-color-ferrite);
				-webkit-mask-image: none;
			}

			[part="year-number"], [part="year-separator"] {
				opacity: 1;
				transition: none;
			}
			[part="years"] [part="year-number"][current] {
				color: white;
			}

			[part="years"] [part="year-separator"]::after {
				color: var(--d2l-color-tungsten);
				font-size: 20px;
			}

			[part~="years-toggle-button"] {
				background-color: var(--d2l-color-celestine);
				cursor: pointer;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

$_documentContainer = html`<dom-module id="d2l-vaadin-month-calendar-styles" theme-for="vaadin-month-calendar">
	<template>
		<style include="vaadin-month-calendar-default-theme">
			:host {
				font-family: inherit;
				color: var(--d2l-color-tungsten);
				--lumo-primary-color: var(--d2l-color-celestine);
			}

			[part~="date"] {
				color: var(--d2l-color-ferrite);
			}

			[part~="date"][focused] {
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
				color: var(--d2l-color-tungsten);
				font-size: 12px;
				text-transform: uppercase;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

$_documentContainer = html`<dom-module id="d2l-vaadin-button-styles" theme-for="vaadin-button">
	<template>
		<style>
			:host {
				background: none;
				font-family: inherit;
				text-transform: uppercase;
				color: var(--d2l-color-celestine);
				font-size: 14px;
				border: none;
				cursor: pointer;
				font-weight: 500;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
