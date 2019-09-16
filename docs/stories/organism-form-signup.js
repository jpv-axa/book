import { storiesOf, addDecorator } from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

import '../components/atoms/input'

const demo1 = `
<axa-form>
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

<div class=m-form__cta>
	<axa-button>Submit</axa-button>
</p>

</form>
</axa-form>
`

storiesOf('Organism|Form', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Personal informations (text + datepicker + selector)', () => demo1)
