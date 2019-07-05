import {
	storiesOf,
	addDecorator
} from '@storybook/html'

import imageWhite from './statics/home-hero-8.jpg'
import imageDark from './statics/landlord-hero-3.jpg'

import withCode from '../../dgAddons/colorationAddon';

import '../components/molecules/hero-cover'

const demo1 = `<axa-header-menu></axa-header-menu>
<axa-hero-cover></axa-hero-cover>
<axa-footer></axa-footer>`

storiesOf('Organism|Header, Footer, Hero Cover', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Default values', () => demo1)


const demo2 = `<axa-header-menu  +searchable>
	<ul>
		<li><a href="#">Menu Item 1</a>
			<ul>
					<li><a href="#">Subnav Item 1-1</a></li>
					<li><a href="#">Subnav Item 1-2</a></li>
					<li><a href="#">Subnav Item 1-3</a></li>
					<li><a href="#" aria-current=page>Indicate current page with <code>&lt;a aria-current=page&gt;</code></a></li>
			</ul>
		</li>
		<li><a href="#">Menu Item 4</a>
			<ul>
				<li><a href="#">Subnav Item 4-1 Subnav Item 4-1Subnav Item 4-1 Subnav Item 4-1Subnav Item 4-1</a></li>
				<li><a href="#">Subnav Item 4-2</a></li>
				<li><a href="#">Subnav Item 4-3</a></li>
				<li><a href="#">Subnav Item 4-4</a></li>
				<li><a href="#">Subnav Item 4-5</a></li>
				<li><a href="#">Subnav Item 4-6</a></li>
				<li><a href="#">Subnav Item 4-7</a></li>
			</ul>
		</li>
	</ul>
</axa-header-menu>

<axa-hero-cover 
    +category-title="motorcycle insurance" 
    +main-title="Die Private Haftpflichtversicherung: Schutz schon ab 21,13€ im Jahr*"
    +src="${imageWhite}""
    >
    <p slot=text-content>Enjoy easy access to AXA's 24/7 emergency and claims helpline plus Accident Forgiveness as a part of your policy. With Accident Forgiveness you won’t lose your No Claims Discount just for having one accident.</p>
    <p slot=legal-content>Terms and conditions apply. Accident Forgiveness is a step back, so you won’t lose your full No Claims Discount if you have an accident. For customers with one or more years of No Claims Discount. Max 2 claims with full NCD.</p>        
    <axa-button slot=call-to-action class=a-button--secondary>Get a Car Insurance Quote</axa-button>
</axa-hero-cover>

<axa-footer>
	<ul title="AXA and you">
		<li><a href=#>Jargon explained</a></li>
		<li><a href=#>Sitemap</a></li>
		<li><a href=#>Manage your policy</a></li>
	</ul>
	<ul title="Beliebte Versicherungen">
		<li><a href=#>Kontakt Privatkunden</a></li>
		<li><a href=#>Ansprechpartner vor Ort</a></li>
		<li><a href=#>Online Banking</a></li>
		<li><a href=#>Service Apps</a></li>
		<li><a href=#>Servicenummern</a></li>
		<li><a href=#>Adressen</a></li>
		<li><a href=#>Freunde werben</a></li>
	</ul>
</axa-footer>`

storiesOf('Organism|Header, Footer, Hero Cover', module)
	.addDecorator(withCode(demo2, 'html'))
	.add('With content', () => demo2)