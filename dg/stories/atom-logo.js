import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

import imageWhite from './statics/home-hero-8.jpg'
import imageDark from './statics/landlord-hero-3.jpg'


import '../components/atoms/logo'


const demo1 = '<axa-logo></axa-logo>'
storiesOf(`Atoms|Logo`, module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Default', () => demo1)


const demo2 = `
<p style=background-image:url(${imageWhite})>
		<axa-logo overimage=blue></axa-logo>
</p><p class=a-typo__text>Over light backgrounds, use attribute <code>overimage="blue"</code></p>
<p style=background-image:url(${imageDark});color:white;>
		<axa-logo overimage=white></axa-logo>
</p><p  class=a-typo__text>Over dark backgrounds, use attribute <code>overimage="white"</code></p>
<p style=background-color:white>
		<axa-logo></axa-logo>
</p><p class=a-typo__text>On white backgrounds, use the standard logo</p>
`
storiesOf(`Atoms|Logo`, module)
	.addDecorator(withCode(demo2, 'html'))
	.add('Over image', () => demo2 + `<style>
	p {
	text-align:center;
	padding: 1em;
	width:40%;
	display:inline-block;
	background-position: center;

	}
	</style>`)



const demo3 = `
<p>
	<axa-logo style=width:10em></axa-logo>
	<axa-logo style=width:5em></axa-logo>
	<axa-logo></axa-logo>
</p><p class=a-typo__text>Logo can be resized by simply using CSS</p>
<p>
	<a href=https://www.axa.com target=_blank>
			<axa-logo></axa-logo>
	</a>
</p><p class=a-typo__text>Logo can be a link with a simple anchor tag (<code>a href=…</code>)</p>
`

storiesOf(`Atoms|Logo`, module)
	.addDecorator(withCode(demo3, 'html'))
	.add('Link, sizes', () => demo3 + `<style>
	p {
	padding: 1em;
	width:40%;
	display:inline-block;
	}
	</style>`)