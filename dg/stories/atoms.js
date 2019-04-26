import {
    storiesOf,
    addDecorator
} from '@storybook/html'
/*import {
    withA11y
} from '@storybook/addon-a11y';


addDecorator(withA11y)
*/
import '../components/atoms/button'
storiesOf('Atoms — Buttons', module)
    // .add('<axa-button>', () => '<axa-button>Hello Button</axa-button>')
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
        <article>
        <h1 class="a-typo__landing-title">Landing Title - Event — <code>.a-typo__landing-title</code></h1>
        <h1 class="a-typo__page-title">Page Title - H1 — <code>a-typo__page-title</code></h1>
        <h2 class="a-typo__slice-title">Slice Title - H2 — <code>a-typo__slice-title</code></h2>
        <h3 class="a-typo__module-title">Module Title - H3 — <code>a-typo__module-title</code></h3>
        <h4 class="a-typo__title">Title - H4 — <code>a-typo__title</code></h4>
        <p><quote class="a-typo__highlight">Highlight / Quote — <code>a-typo__highlight</code> | <code>a-typo__quote</code></quote>
        <p><label class="a-typo__label">Label — <code>a-typo__label</code></label>
        <p><span class="a-typo__text">Standard Text — <code>a-typo__text</code></label></span>
        <p><span class="a-typo__secondary-text">Secondary Text — <code>a-typo__secondary-text</code></label></span>
        <p><span class="a-typo__tagline">Button / Primary Link / Tagline — <code>a-typo__tagline</code> | <code>a-typo__link</code> | <code>a-typo__button</code></label></span>
        <p><span class="a-typo__legals">Legals — <code>a-typo__legals</code></span>
        <p><span class="a-typo__menu-item">Item Menu — <code>a-typo__menu-item</code></span>
        
        </article>
    `)