import {
    storiesOf,
    addDecorator
} from '@storybook/html'


import withCode from '../../dgAddons/colorationAddon';

/*
 * Button
 */
import buttonJs from '!raw-loader!../components/atoms/button/index.js';
import buttonCss from '!raw-loader!../components/atoms/button/index.scss';

import '../components/atoms/button'

let code = `<axa-button>Primary button</axa-button><axa-button class=a-button--secondary>Secondary Blue</axa-button>
<axa-button disabled>Disabled Primary button</axa-button>
<axa-button class=a-button--secondary disabled>Disabled Secondary Blue</axa-button>
<p style="background:#333333;padding:1em">
    <axa-button class="a-button--secondary--white">Secondary White</axa-button>
    <axa-button class="a-button--secondary--white" disabled>Disabled Secondary White</axa-button>
</p>`

storiesOf(`Atoms|Buttons`, module)
    //.addDecorator(withCode(buttonJs, 'js'))
    //.addDecorator(withCode(buttonCss, 'scss'))
    .addDecorator(withCode(code, 'html'))
    .add('All variations', () => code
        /*, {
            notes: {
                markdown: `\`\`\`html
            ${code.toString()}
            \`\`\``
            }
    }*/
    )
/*.add('Change icons', () => `
    <axa-button +icon=arrow-right></axa-button>
    <axa-button +icon=collapse></axa-button>
    <axa-button +icon=download></axa-button>
    <axa-button +icon=email></axa-button>
    <axa-button +icon=expand></axa-button>
    <axa-button +icon=phone></axa-button>
    <axa-button +icon=plus></axa-button>
    <axa-button +icon=search></axa-button>
    <axa-button +icon=upload></axa-button>
    `)*/