import {
    storiesOf,
    addDecorator
} from '@storybook/html'
//import '@axa-ch/patterns-library-polyfill'


import withCode from '../../dgAddons/colorationAddon';

/*
 * Hero Cover
 */
import heroCoverJs from '!raw-loader!../components/molecules/hero-cover/index.js';
import heroCoverCss from '!raw-loader!../components/molecules/hero-cover/index.scss';
import '../components/molecules/hero-cover'
storiesOf('Molecules — Hero Cover', module)
    .addDecorator(withCode(heroCoverJs, 'js'))
    .addDecorator(withCode(heroCoverCss, 'scss'))
    .add('Default values', () => `
        <axa-hero-cover></axa-hero-cover>
    `)
    .add('Replace content ', () => `
        <axa-hero-cover 
            +category-title="+category-title value" 
            +main-title="+main-title value"
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg""
            >
            <p slot=text-content>Place any content here with the attribute <code>slot=text-content</code>. Even <a href="/">links</a> or your custom styles are accepted, as long as they comply with the general guidelines</p>
            <p slot=legal-content>Optional <code>slot=legal-content</code> content.</p>        
            <axa-button slot=call-to-action class=a-button--secondary>Replaced by attribute <code>slot=call-to-action</code></axa-button>
        </axa-hero-cover>

        <axa-hero-cover 
            +category-title="motorcycle insurance" 
            +main-title="Die Private Haftpflichtversicherung: Schutz schon ab 21,13€ im Jahr*"
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg""
            >
            <p slot=text-content>Enjoy easy access to AXA's 24/7 emergency and claims helpline plus Accident Forgiveness as a part of your policy. With Accident Forgiveness you won’t lose your No Claims Discount just for having one accident.</p>
            <p slot=legal-content>Terms and conditions apply. Accident Forgiveness is a step back, so you won’t lose your full No Claims Discount if you have an accident. For customers with one or more years of No Claims Discount. Max 2 claims with full NCD.</p>        
            <axa-button slot=call-to-action class=a-button--secondary>Get a Car Insurance Quote</axa-button>
        </axa-hero-cover>
    `)
    .add('Invert direction and/or colors', () => `
        <axa-hero-cover 
            +main-title="Invert direction : rtl"
            +direction=rtl
            +src="https://www.axa.co.uk/globalassets/new-website/landlord/landlord-hero-3.jpg">
            <p slot=text-content>The value of the attribute <code>+direction</code> can be either <code>rtl</code> (Right To Left, like here) or <code>ltr</code> (default).<br>
            The value of the attribute <code>+design</code> can be either <code>wob</code> (White On Black, like here) or <code>bow</code> (default).</p>
        </axa-hero-cover>

        <axa-hero-cover 
            +main-title="Invert design : wob"
            +design=wob
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg"">
            <p slot=text-content>The value of the attribute <code>+direction</code> can be either <code>rtl</code> (Right To Left) or <code>ltr</code> (default, like here).<br>
            The value of the attribute <code>+design</code> can be either <code>wob</code> (White On Black, like here) or <code>bow</code> (default).</p>
        </axa-hero-cover>

        <axa-hero-cover 
            +main-title="Invert both design (wob) and direction (rtl)"
            +direction=rtl
            +design=wob
            +src="https://www.axa.co.uk/globalassets/new-website/landlord/landlord-hero-3.jpg" >
            <p slot=text-content>The value of the attribute <code>+direction</code> can be either <code>rtl</code> (Right To Left, like here) or <code>ltr</code> (default).<br>
            The value of the attribute <code>+design</code> can be either <code>wob</code> (White On Black, like here) or <code>bow</code> (default).</p>
        </axa-hero-cover>

        <axa-hero-cover 
            +main-title="All default values (ltr / bow)"
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg" >
            <p slot=text-content>The values <code>+design</code> and <code>+direction</code> are left to default.</p>
        </axa-hero-cover>
    `)
    .add('Two Calls To Action', () => `
        <axa-hero-cover 
            +direction=rtl
            +design=wob
            +src="https://www.axa.co.uk/globalassets/new-website/landlord/landlord-hero-3.jpg" >
            <p slot=text-content>You can add from 1 to 2 buttons* in a <code>slot=call-to-action</code>.</p>
            <p slot=legal-content>*Technically you can add anything but as a design system we dont recommend nor support anything else.</p>
            <div slot=call-to-action>
                <axa-button>Get a primary</axa-button>
                <axa-button class=a-button--secondary--white>Get a secondary white</axa-button>
            </div>
        </axa-hero-cover>

        <axa-hero-cover
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg" >
            <p slot=text-content>You can add from 1 to 2 buttons in a <code>slot=call-to-action</code>.</p>
            <div slot=call-to-action>
                <axa-button>資料請求</axa-button>
                <axa-button class=a-button--secondary>専門スタッフに相談</axa-button>
            </div>
        </axa-hero-cover>
    `)

import '../components/molecules/header'

const structure = `        <ul>
<li><a href="#">Menu Item 1</a>
    <ul>
        <li><a href="#">Subnav Item 1-1</a></li>
        <li><a href="#">Subnav Item 1-2</a></li>
        <li><a href="#">Subnav Item 1-3</a></li>
        <li><a href="#" aria-current=page>Indicate current page with <code>&lt;a aria-current=page&gt;</code></a></li>
    </ul>
</li>
<li><a>Menu Item 2, no link</a>
    <ul>
        <li><a href="#">Subnav Item 2-1</a></li>
        <li><a href="#">Subnav Item 2-2</a></li>
        <li><a href="#">Subnav Item 2-3</a></li>
        <li><a href="#">Subnav Item 2-4</a></li>
        <li><a href="#">Subnav Item 2-5</a></li>
        <li><a href="#">Subnav Item 2-6</a></li>
        <li><a href="#">Subnav Item 2-7</a></li>
        <li><a href="#">Subnav Item 2-8</a></li>
    </ul>
<li><a href="#">Menu Item 3, with long text and no sub-menu</a></li>
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
</ul>`

/*
 * Header
 */
import headerJs from '!raw-loader!../components/molecules/header/index.js';
import headerCss from '!raw-loader!../components/molecules/header/index.scss';
storiesOf('Molecules - Header', module)
    .addDecorator(withCode(headerJs, 'js'))
    .addDecorator(withCode(headerCss, 'scss'))
    .add('Empty header', () => `
        <axa-header-menu></axa-header-menu>
        <axa-hero-cover></axa-hero-cover>
    `)
    .add('Header + menu', () => `
        <axa-header-menu>
            ${structure}
        </axa-header-menu>
        <axa-hero-cover></axa-hero-cover>
    `)
    .add('Header + menu + CTA', () => `
    <axa-header-menu>
        ${structure}
        <axa-button slot=call-to-action>slot=call-to-action</axa-button>
    </axa-header-menu>
    <axa-hero-cover></axa-hero-cover>
    `)
    .add('Header + menu + search + CTA', () => `
    <axa-header-menu +searchable>
        ${structure}
        <axa-button slot=call-to-action>slot=call-to-action</axa-button>
    </axa-header-menu>
    <axa-hero-cover></axa-hero-cover>
`)