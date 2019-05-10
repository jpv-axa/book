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
            data-category-title="data-category-title value" 
            data-main-title="data-main-title value"
            data-src="https://via.placeholder.com/1600x1200.png?text=Replace+with+data-src+attribute"
            >
            <p slot=text-content>Place any content here with the attribute <code>slot=text-content</code>. Even <a href="/">links</a> or your custom styles are accepted, as long as they comply with the general guidelines</p>
            <button is=axa-button slot=call-to-action class=a-button--secondary>Replaced by attribute <code>slot=call-to-action</code></button>
        </axa-hero-cover>
    `)
    .add('Invert direction and/or colors', () => `
        <axa-hero-cover 
            data-direction=rtl
            data-design=wob />
            <p slot=text-content>The value of the attribute <code>data-direction</code> can be either <code>rtl</code> (Right To Left, like here) or <code>ltr</code> (default).<br>
            The value of the attribute <code>data-design</code> can be either <code>wob</code> (White On Black, like here) or <code>bow</code> (default).</p>
        `)