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
<fieldset><legend class=a-typo__text-title>Autocomplete demo</legend>

<axa-input +label="Autocomplete">
	<input list=xxx placeholder="For this demo, start typing 'Liv…'" />
	<datalist id=xxx>
		<option value="${values.join('"><option value="')}">
	</datalist>
	<p slot=info>To have an autocomplete you need to add the <code>list</code> attribute to the main field, and provide a list of options with a <code>datalist</code> element.</p>
</axa-input>


<axa-input +label="Autocomplete, with error" +invalid +error="This adress is unknown">
	<input list=zzz value="12 street of Rage" />
	<datalist id=zzz>
		<option value="${values.join('"><option value="')}">
	</datalist>
</axa-input>

<axa-input +label="Autocomplete, opened for this demo (attribute +opened)" +opened>
	<input list=yyy value=Liv />
	<datalist id=yyy>
		<option value="${values.join('"><option value="')}">
	</datalist>
</axa-input>


</fieldset>


`
storiesOf(`Atoms|Inputs`)
	.addDecorator(withCode(demo1, 'html'))
	.add('Autocomplete', () => demo1 + styles)