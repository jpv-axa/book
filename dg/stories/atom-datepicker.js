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

</fieldset>
<fieldset><legend class=a-typo__text-title>Managing date ranges</legend>

<axa-input +label="Datepicker with date range from 1960 to today">
	<input type=date min=1960-01-01 max=now />
	<span slot=info>You can use the standard <code>min</code> and <code>max</code> attributes. The dates in the HTML code must follow the <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max>HTML5 convention</a> : yyy-MM-dd. We support the special keyword <code>now</code>, for the current day.</span>
</axa-input>

<axa-input +label="Datepicker with date range from today to 2025">
	<input type=date min=now max=2025-12-31 />
	<span slot=info>You can use the standard <code>min</code> and <code>max</code> attributes. The dates in the HTML code must follow the <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max>HTML5 convention</a> : yyy-MM-dd. We support the special keyword <code>now</code>, for the current day.</span>
</axa-input>

</fieldset>
<fieldset><legend class=a-typo__text-title>Date format</legend>

<axa-input +label="Datepicker with a value">
	<input type=date value=2011-11-17 />
	<span slot=info>For you developer, the value is a string formatted like this : "YYYY-MM-DD". What the user sees depends on his locale : 
	<ul>
		<li>en-US sees MM / DD / YY,</li>
		<li>ja-JP and ko-KR sees YY / MM / DD,</li>
		<li>rest of the world sees DD / MM / YY.</li>
	</ul></span>
</axa-input>

<axa-input +label="Datepicker with locale forced to US order" +locale=en-US>
	<input type=date value=2011-11-17 />
	<span slot=info>Use the <code>+locale</code> attribute, and set it to <code>en-US</code>.</span>
</axa-input>

<axa-input +label="Datepicker with locale forced to Japanese order" +locale=ja-JP>
	<input type=date value=2011-11-17 />
	<span slot=info>Use the <code>+locale</code> attribute, and set it to <code>ja-JP</code>.</span>
</axa-input>

</fieldset>
`
storiesOf(`Atoms|Inputs`, module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Date Picker', () => demo1 + styles)


const demo2 = `
<fieldset><legend class=a-typo__text-title>Datepicker with error / success</legend>

<axa-input +label="Valid state" +valid>
	<input type=date />
</axa-input>

<axa-input +label="Invalid state" +invalid +error="This date is not available because our offices are closed on weekends, sorry" >
	<input type=date value=2020-12-26 />
	<span slot=info>Like regular text fields, you can use <code>+invalid</code>, <code>+valid</code> and <code>+error</code> attributes on the <code>axa-input</code> tag.</span>
</axa-input>

<axa-input +label="Disabled state" +disabled>
	<input type=date disabled />
</axa-input>

</fieldset>
`
storiesOf(`Atoms|Inputs`, module)
	.addDecorator(withCode(demo2, 'html'))
	.add('Date Picker with error / success / disabled', () => demo2 + styles)