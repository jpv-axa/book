import { storiesOf, addDecorator } from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

import '../components/atoms/input'

const demo1 = `
<axa-form>
<form onsubmit="alert('submited');return false;">

<axa-input +label="Your Login">
	<input type=text id=any-id placeholder=you@company.tld />
</axa-input>

<axa-input +label="Your Password">
	<input type=password  />
	<p slot=info>A good password contains at least <strong>8 characters</strong>, including at least <strong>two numbers</strong> and two <strong>punctuation marks</strong>. Spaces matter, so why not write an easy-to-remember sentence?</p>
</axa-input>

<div class=m-form__cta>
	<axa-button>Submit</axa-button>
</div>

</form>
<axa-form>
`

storiesOf('Organism|Form', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Login password', () => demo1)
