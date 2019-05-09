import {
    storiesOf,
    addDecorator
} from '@storybook/html'
/*import {
    withA11y
} from '@storybook/addon-a11y';



addDecorator(withA11y)
*/

import  withCode  from '../../dgAddons/colorationAddon';

const javascriptCode  = require('!raw-loader!../components/atoms/button/index.js');
const style = require('!raw-loader!../components/atoms/button/index.scss');

import '../components/atoms/button'
storiesOf('Atoms — Buttons', module)
    // .add('<axa-button>', () => '<axa-button>Hello Button</axa-button>')
    .addDecorator(withCode(javascriptCode, 'js'))
    .addDecorator(withCode(style, 'scss'))
    .add('Bouton Nu', () => '<button is=axa-button></button>')
    .add('Bouton avec texte', () => '<button is=axa-button>Hello Button</button>')
    .add('Bouton avec icônes', () => `
        <button is=axa-button data-icon=arrow-right></button>
        <button is=axa-button data-icon=collapse></button>
        <button is=axa-button data-icon=download></button>
        <button is=axa-button data-icon=email></button>
        <button is=axa-button data-icon=expand></button>
        <button is=axa-button data-icon=phone></button>
        <button is=axa-button data-icon=plus></button>
        <button is=axa-button data-icon=search></button>
        <button is=axa-button data-icon=upload></button>
        `)
    .add('large buttons', () => '<button is=axa-button class=a-button--large></button>')

import '../components/atoms/logo'
storiesOf('Atoms — Logo', module)
    .add('Logo', () => '<axa-logo />')

import '../components/atoms/typography'
storiesOf('Typography')
    .add('Titles', () => `
        <h1 class="a-typo__landing-title">Landing Title - H1 — <code>.a-typo__landing-title</code></h1>
        <h1 class="a-typo__page-title">Brand Page Title - H2 — <code>a-typo__page-title</code></h1>
        <h2 class="a-typo__slice-title">Brand Slice Title - H3 — <code>a-typo__slice-title</code></h2>
        <h3 class="a-typo__module-title">Brand Module Title - H4 — <code>a-typo__module-title</code></h3>
        <h4 class="a-typo__card-title">Card Title - H5 — <code>a-typo__card-title</code></h4>
        <h4 class="a-typo__text-title">Text Title - H6 — <code>a-typo__text-title</code></h4>
    `)
    .add('Texts', () => `
        <p><quote class="a-typo__highlight">Highlight / Quote — <code>a-typo__highlight</code> | <code>a-typo__quote</code></quote>
        <p><label class="a-typo__label">Label — <code>a-typo__label</code></label>
        <p><span class="a-typo__text">Standard Text — <code>a-typo__text</code></label></span>
        <p><span class="a-typo__secondary-text">Secondary Text / Link — <code>a-typo__secondary-text</code></label> | <code>a-typo__link</code></span>
        <p><span class="a-typo__tagline">Button / Primary Link / Tagline — <code>a-typo__tagline</code> | <code>a-typo__primary-link</code> | <code>a-typo__button</code></label></span>
        <p><span class="a-typo__legals">Legals — <code>a-typo__legals</code></span>
    `)