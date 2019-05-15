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
            +tagline-title="+tagline-title value" 
            +main-title="+main-title value"
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg""
            >
            <p slot=text-content>Place any content here with the attribute <code>slot=text-content</code>. Even <a href="/">links</a> or your custom styles are accepted, as long as they comply with the general guidelines</p>
            <p slot=legal-content>Optional <code>slot=legal-content</code> content.</p>        
            <button is=axa-button slot=call-to-action class=a-button--secondary>Replaced by attribute <code>slot=call-to-action</code></button>
        </axa-hero-cover>

        <axa-hero-cover 
            +tagline-title="motorcycle insurance" 
            +main-title="Die Private Haftpflichtversicherung: Schutz schon ab 21,13€ im Jahr*"
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg""
            >
            <p slot=text-content>Enjoy easy access to AXA's 24/7 emergency and claims helpline plus Accident Forgiveness as a part of your policy. With Accident Forgiveness you won’t lose your No Claims Discount just for having one accident.</p>
            <p slot=legal-content>Terms and conditions apply. Accident Forgiveness is a step back, so you won’t lose your full No Claims Discount if you have an accident. For customers with one or more years of No Claims Discount. Max 2 claims with full NCD.</p>        
            <button is=axa-button slot=call-to-action class=a-button--secondary>Get a Car Insurance Quote</button>
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
    `)
    .add('Two Calls To Action', () => `
        <axa-hero-cover 
            +direction=rtl
            +design=wob
            +src="https://www.axa.co.uk/globalassets/new-website/landlord/landlord-hero-3.jpg" >
            <p slot=text-content>You can add from 1 to 2 buttons* in a <code>slot=call-to-action</code>.</p>
            <p slot=legal-content>*Technically you can add anything but as a design system we dont recommend nor support anything else.</p>
            <div slot=call-to-action>
                <button is=axa-button>Get a primary</button>
                <button is=axa-button class=a-button--secondary>Get a secondary white</button>
            </div>
        </axa-hero-cover>

        <axa-hero-cover
            +src="https://www.axa.co.uk/globalassets/new-website/home/home-hero-8.jpg" >
            <p slot=text-content>You can add from 1 to 2 buttons in a <code>slot=call-to-action</code>.</p>
            <div slot=call-to-action>
                <button is=axa-button>資料請求</button>
                <button is=axa-button class=a-button--secondary>専門スタッフに相談</button>
            </div>
        </axa-hero-cover>
    `)