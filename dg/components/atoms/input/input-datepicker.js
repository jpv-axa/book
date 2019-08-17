import commonInput from './common'

const fromLocaleToFormat = {
	'default': ['days', 'months', 'years'],
	'en-US': ['months', 'days', 'years'],
	'ja-JP': ['years', 'months', 'days'],
	'ko-KR': ['years', 'months', 'days']
}

class datePicker extends commonInput {

	init() {
		super.init()

		// get infos from the original field
		// the value date, as a date, falling back to today
		this.date = this.el.field.valueAsDate || new Date()
		// minimum date, because Infinity does not make sense
		this.minDate = this.getMinMaxDate(this.el.field.min, this.date, 'min')
		this.maxDate = this.getMinMaxDate(this.el.field.max, this.date, 'max')
		// re-inject the min and max dates to the original field, for the standard field to interpret "now" correctly
		this.el.field.min = fromDateToDateString(this.minDate)
		this.el.field.max = fromDateToDateString(this.maxDate)
		// also sync the date, in case it was not provided
		this.updateFieldDate()
		// console.log(this.date.toDateString(), this.minDate.toDateString(), this.maxDate.toDateString())

		this.locale = this.determineLocale()
		// console.log(this.locale)
		this.selectorsField = this.makeSelectors()
		this.selectorsField.addEventListener('change', this.onDateSelectorChange.bind(this))
		this.el.field.insertAdjacentElement('beforebegin', this.selectorsField)

	}

	/**
	 * Inspects the +locale attribute and the navigator.language global variable and determines which supported locale to chose
	 * @returns {String} One of the supported locale : 'default', 'en-US, 'ja-JP' …
	 */
	determineLocale() {
		// first, let's see what the developer thinks about it
		if (this.el.hasAttribute('+locale')) {
			let potentialLocale = this.el.getAttribute('+locale')
			if (fromLocaleToFormat[potentialLocale]) {
				return potentialLocale
			} else if (potentialLocale === 'en') {
				console.warn('Locale "en" is ambiguous : did you mean en-US or en-GB ? We assumed the less specific format : en-GB.')
				return 'default'
			} else {
				console.warn('You provided us the locale ' + potentialLocale + ' but we don‘t know how to display it. Falling back to default.')
				return 'default'
			}
			// try to guess from the browser's opinion
		} else {
			if (window.navigator && window.navigator.language) {
				let potentialLocale = window.navigator.language
				if (fromLocaleToFormat[potentialLocale]) {
					return potentialLocale
				}
			}
		}
		return 'default'
	}

	/**
	 * Will interpret a date like "2011-11-17", or the special keyword "now". If nothing is given, will set the min date to 110 years before this.date (mostly birth dates), or 10 years after this.date (appointments, end of contracts …)
	 * @param {String|"now"} givenValue A date formated like this : 2011-11-17
	 * @param {Date} baseDate Default values will calculated around this date
	 * @param {"min"|"max"} minOrMax Rules for default values differ if we deal with min or max
	 * @returns {Date}
	 */
	getMinMaxDate(givenValue, baseDate, minOrMax) {
		if (givenValue === 'now')
			return new Date()
		let date = new Date(givenValue) // like 2011-11-17
		// date is valid
		if (isFinite(date))
			return date
		// invalid date ? Set defaults
		date = new Date(baseDate) // clone the date
		if (minOrMax === 'min')
			date.setFullYear(baseDate.getFullYear() - 110)
		else if (minOrMax === 'max')
			date.setFullYear(baseDate.getFullYear() + 10)
		else
			throw new Error('min or max ?')
		return date
	}

	makeSelectors() {
		const container = document.createElement('div')
		// years
		const years = document.createElement('select')
		for (let year = this.minDate.getFullYear(); year <= this.maxDate.getFullYear(); year++) {
			let option = document.createElement('option')
			option.value = year
			option.text = year
			if (year === this.date.getFullYear())
				option.selected = true
			years.appendChild(option)
		}
		const currentYear = this.date.getFullYear()
		// months
		// if we reached the min or max year, we have to disable some months
		const minMonth = (currentYear === this.minDate.getFullYear()) ? this.minDate.getMonth() : 0
		const maxMonth = (currentYear === this.maxDate.getFullYear()) ? this.maxDate.getMonth() : 11
		const months = document.createElement('select')
		// show 12 months
		for (let month = 1; month <= 12; month++) {
			let option = document.createElement('option')
			option.value = month
			option.text = onTwoDigits(month)
			// select the current month
			if (month === this.date.getMonth() + 1)
				option.selected = true
			// disable out-of-range months
			if (month < minMonth + 1 ||
				month > maxMonth + 1)
				option.disabled = true

			months.appendChild(option)
		}
		// days
		// if we reached the min or max year + month, we have to disable some days
		let minDay = 0
		if (currentYear === this.minDate.getFullYear() &&
			this.date.getMonth() === this.minDate.getMonth())
			minDay = this.minDate.getDate()
		let maxDay = 31
		if (currentYear === this.maxDate.getFullYear() &&
			this.date.getMonth() === this.maxDate.getMonth())
			maxDay = this.maxDate.getDate()

		const days = document.createElement('select')

		for (let day = 1; day <= 31; day++) {
			let option = document.createElement('option')
			option.value = day
			option.text = onTwoDigits(day)
			// select current day
			if (day === this.date.getDate())
				option.selected = true
			// disable out-of-range days
			if (day < minDay || day > maxDay)
				option.disabled = true
			// avoid displaying non-existing days like 31st of sept or 29th of february for regular years.
			if (doesDayExist(currentYear, this.date.getMonth(), day))
				days.appendChild(option)
		}

		// variable names are the same as in fromLocaleToFormat[]
		const selectorsEl = {
			days,
			months,
			years
		}

		// inject in the correct order, with "/" in the middle
		fromLocaleToFormat[this.locale]
			.forEach(type => {
				selectorsEl[type].setAttribute('data-type', type)
				container.appendChild(selectorsEl[type])
			})

		return container
	}

	onDateSelectorChange(e) {
		// retrieve the new date
		const elMonths = this.selectorsField.querySelector('[data-type=months]')
		const elYears = this.selectorsField.querySelector('[data-type=years]')
		const elDays = this.selectorsField.querySelector('[data-type=days]')
		this.date = new Date(
			elYears[elYears.selectedIndex].value,
			elMonths[elMonths.selectedIndex].value - 1,
			elDays[elDays.selectedIndex].value
		)
		/*console.log( elYears[elYears.selectedIndex].value, elMonths[elMonths.selectedIndex].value, elDays[elDays.selectedIndex].value, this.date)*/
		this.updateFieldDate()
	}

	updateFieldDate() {
		// setting valueAsDate = this.date was causing rounding problems
		this.el.field.value = fromDateToDateString(this.date)
	}
}

/**
 * Will format a Date object to a string like "2011-11-17"
 * @param {Date} date the Date Object to convert
 * @returns {String} Something like "2011-11-17"
 */
function fromDateToDateString(date) {
	return [
		date.getFullYear(),
		onTwoDigits(date.getMonth() + 1),
		onTwoDigits(date.getDate())
	].join('-')
}

/**
 * From 1 to '01', and from 31 to '31'
 * @param {Number} number 
 */
const onTwoDigits = (number => number.toString().padStart(2, '0'))

/**
 * Check if this day really exists (29 feb on a leap year, for example)
 * @param {Number|String} year 
 * @param {Number|String} month 
 * @param {Number|String} day 
 */
function doesDayExist(year, month, day) {
	const date = new Date(year, month, day)
	return (date.getFullYear() == year &&
		date.getMonth() == month &&
		date.getDate() == day)
}

export default datePicker