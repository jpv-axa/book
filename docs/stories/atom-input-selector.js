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


const values = [
	'12 street of Liverpool, London, United Kingdom',
	'12 street of Livers, East Brunsville, United Kingdom',
	'12 street of Livells, London, United Kingdom'
]

const demo1 = `
<fieldset><legend class=a-typo__text-title>Selector Demo</legend>

<axa-input +label="Selector">
	<select id="pet-select">
		<option value="">--Please choose an option--</option>
		<option value="dog">Dog</option>
		<option value="cat">Cat</option>
		<option value="hamster">Hamster</option>
		<option value="parrot">Parrot</option>
		<option value="spider">Spider</option>
		<option value="goldfish">Goldfish</option>
	</select>
	<p slot=info>To have an autocomplete you need to add the <code>list</code> attribute to the main field, and provide a list of options with a <code>datalist</code> element.</p>
</axa-input>


</fieldset>


`
storiesOf(`Atoms|Inputs`)
	.addDecorator(withCode(demo1, 'html'))
	.add('Selector', () => demo1 + styles)