import { storiesOf } from '@storybook/html'

import withCode from '../../dgAddons/colorationAddon'

import '../components/molecules/form/'

const demo1 = `
<axa-form>
	<form>
	<legend class=m-form__legend>Form with tag <code>AXA-FORM</code> around a normal <code>FORM</code> tag : 1 input, 1 legend, 1 button</legend>

	<axa-input></axa-input>
	<div class=m-form__cta>
		<axa-button>Primary button</axa-button>
		<p>Notes to implementors : <ul>
			<li>You can use the <code>axa-form</code> element, or simply give a <code>.m-form</code> class to your <code>FORM</code> element.</li>
			<li>To keep your semantic intact, you can still use <code>LEGEND</code> elements. We provided you the <code>.m-form__legend</code> classe to reset them.</li>
			<li>However the <code>FIELDSET</code> tag was not totally resetable, so please do not use it for now or it does break the flex behaviour (if you're in luck, use <code>.m-form__fieldset</code>, if you find a solution, please contribute to the code).</li>
			<li>By default, will expand from 1 to 3 columns if screen size allows.</li>
			<li>Please use a container with a class<code>class=m-form__cta</code> at the end of the form, around your submit button or any text you wan to put here.</li>
			</ul>
		</p>
	</div>
</form>
</axa-form>


<form class=m-form>
	<legend class=m-form__legend>Form with class <code>m-form</code>: 5 input, 1 legend, 1 button</legend>

	<axa-input></axa-input>
	<axa-input>
		<p slot=info>Some Informations.</p>
	</axa-input>
	<axa-input></axa-input>
	<axa-input></axa-input>
	<axa-input></axa-input>		
	<div class=m-form__cta>
		<axa-button></axa-button>
	</div>
</form>

<style>
	.m-form {
		border: 1px solid green;
	}
</style>
`

storiesOf('Molecules|Form Container', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Default value', () => demo1)

const demo2 = `
<div class=m-form>
<legend class=m-form__legend>By default, will stretch from 1 to 3 columns with class <code>.m-form</code></legend>

<axa-input></axa-input>
<axa-input>			<p slot=info>Some Informations.</p>	</axa-input>
<axa-input></axa-input>
<axa-input><input type=date /></axa-input>
<axa-input><input type=password /></axa-input>
<div class=m-form__cta>
<axa-button></axa-button>
</div>

</div>

<axa-form class=m-form--col-1>
	<form>
		<legend class=m-form__legend>Keep centered on One column with class <code>.m-form--col-1</code></legend>

		<axa-input></axa-input>
		<axa-input><input type=password />		</axa-input>
		<axa-input>		<p slot=info>Some Informations.</p>
		</axa-input>
		<div class=m-form__cta>
			<axa-button></axa-button>
		</div>

	</form>
</axa-form>

<axa-form class=m-form--col-2>
	<form>
		<legend class=m-form__legend>Center and Use Two Columns If Possible with class <code>.m-form--col-2</code></legend>

		<axa-input></axa-input>
		<axa-input ><input type=date /></axa-input>
		<axa-input>
			<p slot=info>Some Informations.</p>
		</axa-input>
		<div class=m-form__cta>
			<axa-button></axa-button>
		</div>

	</form>
</axa-form>

<style>
	.m-form {
		background-color: lightcyan;
	}
</style>
`
storiesOf('Molecules|Form Container', module)
	.addDecorator(withCode(demo2, 'html'))
	.add('One Col, Two Cols', () => demo2)

const demo3 = `
<axa-form class=m-form--col-1>
	<form>
		<legend class=m-form__legend>Default placement with class <code>.m-form__cta</code></legend>
		<axa-input></axa-input>
		<div class="m-form__cta m-form__cta">
			<axa-button></axa-button>
		</div>
	</form>
</axa-form>

<axa-form class=m-form--col-1>
	<form>
		<legend class=m-form__legend>CTA button placement with <code>.m-form__cta--right</code></legend>
		<axa-input></axa-input>
		<div class="m-form__cta m-form__cta--right">
			<axa-button></axa-button>
		</div>
	</form>
</axa-form>

<axa-form class=m-form--col-1>
	<form>
		<legend class=m-form__legend>CTA button placement with <code>.m-form__cta--left</code></legend>
		<axa-input></axa-input>
		<div class="m-form__cta m-form__cta--left">
			<axa-button></axa-button>
		</div>
	</form>
</axa-form>

<axa-form class=m-form--col-2>
	<form>
		<legend class=m-form__legend>Default placement with class <code>.m-form__cta</code></legend>
		<axa-input></axa-input>
		<axa-input></axa-input>
		<div class="m-form__cta m-form__cta">
			<axa-button></axa-button>
		</div>
	</form>
</axa-form>

<axa-form class=m-form--col-2>
	<form>
		<legend class=m-form__legend>CTA button placement with <code>.m-form__cta--right</code></legend>
		<axa-input></axa-input>
		<axa-input></axa-input>
		<div class="m-form__cta m-form__cta--right">
			<axa-button></axa-button>
		</div>
	</form>
</axa-form>

<axa-form class=m-form--col-2>
	<form>
		<legend class=m-form__legend>CTA button placement with <code>.m-form__cta--left</code></legend>
		<axa-input></axa-input>
		<axa-input></axa-input>
		<div class="m-form__cta m-form__cta--left">
			<axa-button></axa-button>
		</div>
	</form>
</axa-form>

<style>
	.m-form {
		background-color: lightcyan;
	}
</style>
`
storiesOf('Molecules|Form Container', module)
	.addDecorator(withCode(demo3, 'html'))
	.add('Button placement', () => demo3)
