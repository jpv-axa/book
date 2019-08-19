import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon';

import '../components/atoms/input'

const demo1 = `
<form onsubmit="alert('submited');return false;">

<axa-input +label="Your Login">
	<input type=text id=any-id placeholder=you@company.tld />
</axa-input>

<axa-input +label="Your Password">
	<input type=password  />
	<p slot=info>A good password contains at least <strong>8 characters</strong>, including at least <strong>two numbers</strong> and two <strong>punctuation marks</strong>. Spaces matter, so why not write an easy-to-remember sentence?</p>
</axa-input>

<p>
	<axa-button>Submit</axa-button>
</p>

</form>

<style>
@media (min-width: 37.5rem) {
axa-input {
	margin-right: 2rem;
}
}
form {
	padding: 1rem;
}
p {
	padding:0;
	margin:0;
}
</style>

`

storiesOf('Organism|Form', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Login password', () => demo1)