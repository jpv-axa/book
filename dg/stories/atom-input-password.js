import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon';


import '../components/atoms/input'

const infoLong = 'Sample long text helper message, for design example that show how it can be. But we recommand, max two lines… It should be a short text helper and not a full paragraph like this.'
const infoShort = 'Text helper message.'

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
<fieldset><legend class=a-typo__text-title>Password fields</legend>

<axa-input +label="Default Password Field">
	<input type=password />
</axa-input>

<axa-input +label="Disabled Password Field">
	<input type=password disabled />
</axa-input>

<axa-input +label="Password Field with Placeholder and Text Helper">
	<input type=password placeholder="Placeholder password filled" />
	<p slot=info>A good password contains at least <strong>8 characters</strong>, including at least <strong>two numbers</strong> and two <strong>punctuation marks</strong>. Spaces matter, so why not write an easy-to-remember sentence?</p>
</axa-input>

<axa-input +label="Password Field hidden value (default)">
	<input type=password value="should see me only when requested" />
</axa-input>

<axa-input +label="Password Field Revealed Value" +revealed>
	<input type=password value="should see me" />
	<p slot=info><strong>Note to implementor</strong> : you should always let the user decide if (s)he wants to reveal his password or not, please never use <code>+revealed</code> by default.</p>
</axa-input>

</fieldset>

`
storiesOf(`Atoms|Inputs`)
	.addDecorator(withCode(demo1, 'html'))
	.add('Password', () => demo1 + styles)