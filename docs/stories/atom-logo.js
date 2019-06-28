import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

/* Logo
 */
import logoJs from '!raw-loader!../components/atoms/logo/index.js';
import logoCss from '!raw-loader!../components/atoms/logo/index.scss';


import '../components/atoms/logo'


const demo1 = '<axa-logo></axa-logo>'
storiesOf(`Atoms|Logo`, module)
	/*.addDecorator(withCode(logoJs, 'js'))
	.addDecorator(withCode(logoCss, 'scss'))*/
	.addDecorator(withCode(demo1, 'html'))
	.add('Default', () => demo1)


const demo2 = `
<p style=background-image:url(https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg)>
		<axa-logo overimage=blue></axa-logo> Over light backgrounds, use attribute <code>overimage="blue"</code>
</p>
<p style=background-image:url(https://www.axa.co.uk/globalassets/new-website/landlord/landlord-hero-3.jpg);color:white;>
		<axa-logo overimage=white></axa-logo> Over dark backgrounds, use attribute <code>overimage="white"</code>
</p>
<p style=background-color:white>
		<axa-logo></axa-logo> On white backgrounds, use the standard logo
</p>
`
storiesOf(`Atoms|Logo`, module)
	.addDecorator(withCode(demo2, 'html'))
	.add('Over image', () => demo2 + `<style>
	p {
	text-align:center;
	padding: 1em;
	
	}
	</style>`)



const demo3 = `
<p>Logo can be resized by simply using CSS
		<axa-logo style=width:10em></axa-logo>
		<axa-logo></axa-logo>
		<axa-logo style=width:1em></axa-logo>
</p>
<p>Logo can be a link with a simple anchor tag (<code>a href=…</code>)
		<a href=https://www.axa.com target=_blank>
				<axa-logo></axa-logo>
		</a>
</p>
`

storiesOf(`Atoms|Logo`, module)
	.addDecorator(withCode(demo3, 'html'))
	.add('Link, sizes', () => demo3)