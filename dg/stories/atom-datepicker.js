import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon';


import '../components/atoms/input'

const styles = `
<style>
@media (min-width: 37.5rem) {
axa-input {
	margin-right: 2rem;
}
}
fieldset {
	margin-bottom: 2rem;
	padding-top: 2rem;
	border:0;
	padding:0 1rem;
	margin:0;
}
legend {
	padding-bottom: 2rem;
}
</style>
`

const demo1 = `
<fieldset><legend class=a-typo__text-title>Default datepicker</legend>

<axa-input +label="Datepicker with default values">
	<input type=date />
	<span slot=info>Note that we currently do not support any other type than <code>date</code> (like week, month, time …). On a real mobile, we let the user use the OS datepicker.</span>
</axa-input>

<axa-input +label="Datepicker with date range from 1960 to today">
	<input type=date min=1960-01-01 max=now />
	<span slot=info>You can use the standard <code>min</code> and <code>max</code> attributes. The dates in the HTML code must follow the <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max>HTML5 convention</a> : yyy-MM-dd. We support the special keyword <code>now</code>, for the current day.</span>
</axa-input>

<axa-input +label="Datepicker with date range from today to 2025">
	<input type=date min=now max=2025-12-31 />
	<span slot=info>You can use the standard <code>min</code> and <code>max</code> attributes. The dates in the HTML code must follow the <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max>HTML5 convention</a> : yyy-MM-dd. We support the special keyword <code>now</code>, for the current day.</span>
</axa-input>

<axa-input +label="Datepicker with a value">
	<input type=date value=2011-11-17 />
	<span slot=info>Value is a string formatted like this : YYYY-MM-DD. What the user sees depends on his locale (en-us sees MM/DD/YY, ja-JP and ko-KR sees YY/MM/DD, rest of the world sees DD/MM/YY).</span>
</axa-input>

<axa-input +label="Datepicker with locale forced to US format" +locale=en-US>
	<input type=date value=2011-11-17 />
	<span slot=info>Use the <code>+locale</code> attribute, and set it to <code>en-US</code>.</span>
</axa-input>

<axa-input +label="Datepicker with locale forced to Japanese format" +locale=ja-JP>
	<input type=date value=2011-11-17 />
	<span slot=info>Use the <code>+locale</code> attribute, and set it to <code>ja-JP</code>.</span>
</axa-input>

</fieldset>
`
storiesOf(`Atoms|Inputs`, module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Date Picker', () => demo1 + styles)