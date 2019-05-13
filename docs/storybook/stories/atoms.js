import {
    storiesOf,
    addDecorator
} from '@storybook/html'

import withCode from '../../dgAddons/colorationAddon';

const javascriptCode = require('!raw-loader!../components/atoms/button/index.js');
const style = require('!raw-loader!../components/atoms/button/index.scss');

import '../components/atoms/button'
storiesOf('Atoms — Buttons', module)
    // .add('<axa-button>', () => '<axa-button>Hello Button</axa-button>')
    .addDecorator(withCode(javascriptCode, 'js'))
    .addDecorator(withCode(style, 'scss'))
    .add('Default options', () => `<button is=axa-button>Primary button</button><button is=axa-button class=a-button--secondary>Secondary Blue</button>
    <button is=axa-button disabled>Disabled Primary button</button>
    <button is=axa-button class=a-button--secondary disabled>Disabled Secondary Blue</button>
    <p style="background:#333333;padding:1em">
        <button is=axa-button class="a-button--secondary--white">Secondary White</button>
        <button is=axa-button class="a-button--secondary--white" disabled>Disabled Secondary White</button>
    </p>`)
    .add('Change inner text', () => '<button is=axa-button>Hello Button</button>')
/*.add('Change icons', () => `
    <button is=axa-button +icon=arrow-right></button>
    <button is=axa-button +icon=collapse></button>
    <button is=axa-button +icon=download></button>
    <button is=axa-button +icon=email></button>
    <button is=axa-button +icon=expand></button>
    <button is=axa-button +icon=phone></button>
    <button is=axa-button +icon=plus></button>
    <button is=axa-button +icon=search></button>
    <button is=axa-button +icon=upload></button>
    `)*/

import '../components/atoms/logo'
storiesOf('Atoms — Logo', module)
    .add('Logo', () => '<axa-logo />')

import '../components/atoms/typography'
storiesOf('Typography')
    .add('Titles', () => `
        <h1 class="a-typo__event-title" title=".a-typo__event-title">Event Title</h1>
        <h1 class="a-typo__page-title" title=".a-typo__page-title">Page Title - H1</h1>
        <h2 class="a-typo__slice-title" title=".a-typo__slice-title">Slice Title - H2</h2>
        <h3 class="a-typo__module-title" title=".a-typo__module-title">Module Title - H3</h3>
        <h4 class="a-typo__card-title" title=".a-typo__card-title">Card Title - H4</h4>
        <h4 class="a-typo__text-title" title=".a-typo__text-title">Text Title - H5</h4>
    `)
    .add('Texts', () => `
        <p><quote class="a-typo__highlight" title=".a-typo__highlight | .a-typo__quote">Highlight / Quote</quote></p>
        <p><label class="a-typo__label" title=".a-typo__label">Label</label></p>
        <p class="a-typo__text" title=".a-typo__text">Standard Text</span>
        <p><span class="a-typo__secondary-text" title=".a-typo__secondary-text | .a-typo__link">Secondary Text / Link</span></p>
        <p>
            <span class=a-typo__button title=.a-typo__button>Button</span> / 
            <span class=a-typo__primary-link title=.a-typo__primary-link>Primary Link</span> / 
            <span class=a-typo__tagline title=.a-typo__tagline>Tagline / 
            <span class=a-typo__menu-item title=.a-typo__menu-item>Menu Item</span>
        </p>
        <p><span class="a-typo__legals" title=".a-typo__legals">Legals</span></p>
    `)
    .add('Long text demos', () => `
        <h1 class=a-typo__page-title>Unser Tipp für Ihre Mopedversicherung</h1>
        <p class=a-typo__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

`)