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

#### 'date-format'
The date format for the input field, for example, 'yyyy/mm/dd', 'dd/mm/yyyy', etc...

#### 'first-day-of-week'
The first day of the week for the date picker, (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday)
