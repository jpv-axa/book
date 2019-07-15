import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon';


import '../components/atoms/input'

const infoLong = 'Sample long text helper message, for design example that show how it can be. But we recommand, max two lines… It should be a short text helper and not a full paragraph like this.'
const infoShort = 'Text helper message.'

const demo1 = `
<fieldset><legend>Minimal : with its label</legend>

<axa-input +label="Field Label">
	<input type=text id=any-id value="Value attribute set" />
</axa-input>

</fieldset>

<fieldset><legend>With Placeholder or Additional Info</legend>

<axa-input +label="Field Label">
	<input type=text name=any-name placeholder="Placeholder standard filled" />
</axa-input>
<axa-input +label="Field Label and Infos">
	<input type=text id=any-name-with-info placeholder="Placeholder standard filled" />
	<p slot=info>${infoShort}</p>
</axa-input>

</fieldset>


<fieldset><legend>Disabled Field</legend>

<axa-input +label="Normal Field Label">
	<input disabled type=text id=is-disabled placeholder="Disabled Field" />
</axa-input>

<axa-input +label="Field Label and Infos">
	<input disabled type=text id=is-disabled-infos placeholder="Disabled Field" />
	<p slot=info>${infoLong}</p>
</axa-input>

</fieldset>


<fieldset><legend>Nude field</legend>

<axa-input>
	<input />
</axa-input>

<axa-input></axa-input>


</fieldset>

`
storiesOf(`Atoms|Inputs`)
	.addDecorator(withCode(demo1, 'html'))
	.add('Simple Text Fields', () => demo1)


const demo2 = `
<fieldset><legend>Fields in error</legend>

<axa-input +label="Default error message" +invalid>
	<input type=text />
</axa-input>

<axa-input +label="Custom error message" +invalid +error="Merci de renseigner ce champs">
	<input type=text />
</axa-input>

<axa-input +label="Error message And Text Helper" +invalid>
	<input type=text />
	<span slot=info>${infoShort}</span>
</axa-input>

</fieldset>
`

storiesOf(`Atoms|Inputs`)
	.addDecorator(withCode(demo2, 'html'))
	.add('Fields with error / success', () => demo2)