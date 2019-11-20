> Deprecated: A new date input (that does not rely on third-party components) should be created and added to [BrightspaceUI/inputs](https://github.com/BrightspaceUI/inputs) instead.

# d2l-date-picker

A [Polymer](https://www.polymer-project.org/1.0/)-based web component Date Picker for D2L Brightspace

## Installation

```sh
bower install d2l-date-picker
```

## Usage

Import d2l-date-picker.html:
```html
<head>
	<link rel="import" href="../d2l-date-picker/d2l-date-picker.html">
</head>
```

The user can click on the input field or select enter while focused on the input field to open the date picker.


### Attributes

#### 'value'
The 'value' attribute sets the current date of the picker in an ISO format (YYYY-MM-DD)

#### 'min'
The minimum date allowed the user can choose

#### 'max'
The maximum date allowed the user can choose

#### 'placeholder'
The placeholder text for when the date is empty

#### 'label'
The label for the input field

#### 'locale'
The locale for the picker, for example, 'en', 'fr'...

#### 'first-day-of-week'
The first day of the week for the date picker, (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday)

#### 'custom-overlay-style'
Allows the user to provide the `--vaadin-date-picker-overlay` mixin when set to true.

#### 'initial-position'
The date that is visible when there is no value set

## Overriding the date format
This repository uses https://github.com/BrightspaceUI/localize-behavior for formatting dates, if you need to override the date format, look there for instructions.

## Versioning & Releasing

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version and create a tag during the next build.
