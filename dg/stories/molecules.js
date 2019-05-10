import {
    storiesOf,
    addDecorator
} from '@storybook/html'
/*import {
    withA11y
} from '@storybook/addon-a11y';


addDecorator(withA11y)
*/
import '../components/molecules/hero-cover'
storiesOf('Molecules — Hero Cover', module)
    .add('Default values', () => `
        <axa-hero-cover />
        `)
    .add('Replace content ', () => `
        <axa-hero-cover 
            +category-title="+category-title value" 
            +main-title="+main-title value"
            +src="https://imgplaceholder.com/160x90?text=src+attribute&font-size=20"
            >
            <p slot=text-content>Place any content here with the attribute <code>slot=text-content</code>. Even <a href="/">links</a> or your custom styles are accepted, as long as they comply with the general guidelines</p>
            <p slot=legal-content>Optional <code>slot=legal-content</code> content.</p>        
            <button is=axa-button slot=call-to-action class=a-button--secondary>Replaced by attribute <code>slot=call-to-action</code></button>
        </axa-hero-cover>
    `)
    .add('Invert direction and/or colors', () => `
        <axa-hero-cover 
            +main-title="Invert direction : rtl"
            +direction=rtl>
            <p slot=text-content>The value of the attribute <code>+direction</code> can be either <code>rtl</code> (Right To Left, like here) or <code>ltr</code> (default).<br>
            The value of the attribute <code>+design</code> can be either <code>wob</code> (White On Black, like here) or <code>bow</code> (default).</p>
        </axa-hero-cover>
        <axa-hero-cover 
            +main-title="Invert design : wob"
            +design=wob>
            <p slot=text-content>The value of the attribute <code>+direction</code> can be either <code>rtl</code> (Right To Left) or <code>ltr</code> (default).<br>
            The value of the attribute <code>+design</code> can be either <code>wob</code> (White On Black, like here) or <code>bow</code> (default).</p>
        </axa-hero-cover>
        <axa-hero-cover 
            +main-title="Invert both design (wob) and direction (rtl)"
            +direction=rtl
            +design=wob >
            <p slot=text-content>The value of the attribute <code>+direction</code> can be either <code>rtl</code> (Right To Left, like here) or <code>ltr</code> (default).<br>
            The value of the attribute <code>+design</code> can be either <code>wob</code> (White On Black, like here) or <code>bow</code> (default).</p>
        </axa-hero-cover>
    `)
    .add('Two Call To Action', () => `
    <axa-hero-cover 
        +direction=rtl
        +design=wob >
        <p slot=text-content>You can add from 1 to 2 buttons in a <code>slot=call-to-action</code>.</p>
        <div slot=call-to-action>
            <button is=axa-button>Get a primary</button>
            <button is=axa-button class=a-button--secondary--white>Get a secondary</button>
        </div>
    </axa-hero-cover>

    <axa-hero-cover >
        <p slot=text-content>You can add from 1 to 2 buttons in a <code>slot=call-to-action</code>.</p>
        <div slot=call-to-action>
            <button is=axa-button>Get a primary</button>
            <button is=axa-button class=a-button--secondary>Get a secondary</code></button>
        </div>
    </axa-hero-cover>
    `)