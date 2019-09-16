import { storiesOf, addDecorator } from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

import imageWhite from './statics/home-hero-8.jpg'

import css from './organism-form-image.scss'

const values = [
	'12 street of Liverpool, London, United Kingdom',
	'12 street of Livers, East Brunsville, United Kingdom',
	'12 street of Livells, London, United Kingdom'
]

const form = `
<form class="m-form m-form--col-1" onsubmit="return onSubmit()">
<axa-input>
	<p slot=info>On this page we have merged a custom design inspired by the "Text And Image" molecule with other regular axa-* tags.</p>
</axa-input>
<axa-input +label="Your Adress">
	<input list=xxx placeholder="For this demo, start typing 'Liv…'" />
	<datalist id=xxx>
		<option value="${values.join('"><option value="')}">
	</datalist>
	<p slot=info>To have an autocomplete you need to add the <code>list</code> attribute to the main field, and provide a list of options with a <code>datalist</code> element.</p>
</axa-input>

<div class="m-form__cta m-form__cta--left">
	<axa-button>Next Step</axa-button>
</div>
</form>
`

const demo1 = `
<axa-header-menu +searchable>
	<ul>
		<li><a href=javascript:onNavigate() >Menu Item 1</a>
			<ul>
					<li><a href=javascript:onNavigate() >Subnav Item 1-1</a></li>
					<li><a href=javascript:onNavigate() >Subnav Item 1-2</a></li>
					<li><a href=javascript:onNavigate() >Subnav Item 1-3</a></li>
					<li><a href=javascript:onNavigate()  aria-current=page>Indicate current page with <code>&lt;a aria-current=page&gt;</code></a></li>
			</ul>
		</li>
		<li><a href=javascript:onNavigate() >Menu Item 4</a>
			<ul>
				<li><a href=javascript:onNavigate() >Subnav Item 4-1 Subnav Item 4-1Subnav Item 4-1 Subnav Item 4-1Subnav Item 4-1</a></li>
				<li><a href=javascript:onNavigate() >Subnav Item 4-2</a></li>
				<li><a href=javascript:onNavigate() >Subnav Item 4-3</a></li>
				<li><a href=javascript:onNavigate() >Subnav Item 4-4</a></li>
				<li><a href=javascript:onNavigate() >Subnav Item 4-5</a></li>
				<li><a href=javascript:onNavigate() >Subnav Item 4-6</a></li>
				<li><a href=javascript:onNavigate() >Subnav Item 4-7</a></li>
			</ul>
		</li>
	</ul>
</axa-header-menu>

<main class=o-form-image>
	<div class=illustration style=background-image:url(${imageWhite})></div>
	<div class=content>
	${form}
	</div>
	
</main>

<axa-footer></axa-footer>
`
// catchall method
window.onNavigate = function() {
	return alert('Click')
}
window.onSubmit = function() {
	alert('Submited')
	return false
}

storiesOf('Organism|Form', module)
	.addDecorator(withCode(demo1, 'html'))
	.addDecorator(withCode(css, 'scss'))
	.add('Form with illustration image', () => demo1)
