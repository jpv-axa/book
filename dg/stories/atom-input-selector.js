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


const options = `
		<option value="dog">Dog</option>
		<option value="cat" selected>Cat</option>
		<option value="hamster">Hamster</option>
		<option value="parrot">Parrot</option>
		<option value="spider">Spider</option>
		<option value="goldfish">Goldfish</option>
`

const demo1 = `
<fieldset><legend class=a-typo__text-title>Selector Demo</legend>

<axa-input +label="Selector">
	<select>
		${options}
	</select>
</axa-input>


<axa-input +label="Selector with Placeholder" +placeholder="Placeholder Select an Item">
	<select>
		${options}
	</select>
	<p slot=info>Displays a non-selectable placeholder. Use the <code>+placeholder</code> attribute to set up your text.</p>
</axa-input>


<axa-input +label="Opened Selector (only for demo)" +opened>
	<select>
		${options}
	</select>
	<p slot=info>This is for demo only, please never let a selector opened by default.</p>
</axa-input>

</fieldset>
`
storiesOf(`Atoms|Inputs`, module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Selector', () => demo1 + styles)


const demo2 = `
<fieldset><legend class=a-typo__text-title>Selector with error / success</legend>
	
<axa-input +label="Valid state" +valid>
	<select>
		${options}
	</select>
</axa-input>
	

<axa-input +label="Invalid state" +invalid +error="Merci de renseigner ce champs">
	<select>
		${options}
	</select>
	<span slot=info>Like regular text fields, you can use <code>+invalid</code>, <code>+valid</code> and <code>+error</code> attributes on the <code>axa-input</code> tag.</span>
</axa-input>


<axa-input +label="Disabled Selector" +disabled>
	<select disabled>
		${options}
	</select>
</axa-input>

</fieldset>
`

storiesOf(`Atoms|Inputs`, module)
	.addDecorator(withCode(demo2, 'html'))
	.add('Selector with error / success / Disabled', () => demo2 + styles)