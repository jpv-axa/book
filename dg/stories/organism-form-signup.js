import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon';

import '../components/atoms/input'

const demo1 = `
<form onsubmit="alert('submited');return false;">

<axa-input +label="Your full name" >
	<input type=text placeholder="Eg: Dr. Livingstone, Frank Enstein, ಅಭಿಷೇಕ್…" />
	<p slot=info>How should we name you?</p>
</axa-input>

<axa-input +label="Your birth date">
	<input type=date max=2000-01-01 />
</axa-input>

<axa-input +label="Your gender">
	<select>
		<option>Not Provided</option>
		<option>Male</option>
		<option>Female</option>
	</select>
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
	.add('Personal informations (text + datepicker + selector)', () => demo1)