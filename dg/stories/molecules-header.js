import {
    storiesOf,
    addDecorator
} from '@storybook/html'


import withCode from '../../dgAddons/colorationAddon';

import '../components/molecules/header'


// dummy catchup function
window.onNavigate = function () {
    return alert('Click')
}

const structure = `        <ul>
<li><a href=javascript:onNavigate() >Menu Item 1</a>
    <ul>
        <li><a href=javascript:onNavigate() >Subnav Item 1-1</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 1-2</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 1-3</a></li>
        <li><a href=javascript:onNavigate()  aria-current=page>Indicate current page with <code>&lt;a aria-current=page&gt;</code></a></li>
    </ul>
</li>
<li><a>Menu Item 2, no link</a>
    <ul>
        <li><a href=javascript:onNavigate() >Subnav Item 2-1</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 2-2</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 2-3</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 2-4</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 2-5</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 2-6</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 2-7</a></li>
        <li><a href=javascript:onNavigate() >Subnav Item 2-8</a></li>
    </ul>
<li><a href=javascript:onNavigate() >Menu Item 3, with long text and no sub-menu</a></li>
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
</ul>`

/*
 * Header
 */
import headerJs from '!raw-loader!../components/molecules/header/index.js';
import headerCss from '!raw-loader!../components/molecules/header/index.scss';


const demo1 = `
<axa-header-menu></axa-header-menu>
<axa-hero-cover></axa-hero-cover>
`
storiesOf('Molecules|Header', module)
    .addDecorator(withCode(demo1, 'html'))
    .add('Empty header', () => demo1)


const demo2 = `
<axa-header-menu>
    ${structure}
</axa-header-menu>
<axa-hero-cover></axa-hero-cover>
`
storiesOf('Molecules|Header', module)
    .addDecorator(withCode(demo2, 'html'))
    .add('Header + menu', () => demo2)


const demo3 = `
<axa-header-menu>
    ${structure}
    <axa-button slot=call-to-action>slot=call-to-action</axa-button>
</axa-header-menu>
<axa-hero-cover></axa-hero-cover>
`
storiesOf('Molecules|Header', module)
    .addDecorator(withCode(demo3, 'html'))
    .add('Header + menu + CTA', () => demo3)


const demo4 = `
<axa-header-menu +searchable>
    ${structure}
    <axa-button slot=call-to-action>slot=call-to-action</axa-button>
</axa-header-menu>
<axa-hero-cover></axa-hero-cover>
`
storiesOf('Molecules|Header', module)
    .addDecorator(withCode(demo4, 'html'))
    .add('Header + menu + search + CTA', () => demo4)