import {
    storiesOf,
    addDecorator
} from '@storybook/html'
import {
    withA11y
} from '@storybook/addon-a11y';
import noteAsMd from '../stories/button.md'


addDecorator(withA11y)
storiesOf('Original Example buttons', module)
    .add('with text', () => '<button>Hello Button</button>', {
        notes: 'simple text notes'
    })
    .add('with some emoji', () => `<button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>`, {
        notes: noteAsMd
    })

// search on disk our components, then our pages
const storiesComponents = storiesOf('Components', module)
// add components programmaticaly
let req1 = require.context('../wg_static_agent/components/', true, /.html$/)
req1.keys().forEach(filename => {
    storiesComponents.add(filename, () => {
        let html = req1(filename)
        return html
    })
    // req(filename)
})
// add pages programmaticaly
const storiesPages = storiesOf('Pages', module)
let req2 = require.context('../wg_static_agent/pages/', true, /.html$/)
req2.keys().forEach(filename => {
    storiesPages.add(filename, () => {
        let html = req2(filename)
        return html
    })
    // req(filename)
})


/*storiesOf('Axa Web Guidelines Static HTML', module)
    .add('All Axa buttons states', () => {
        let html = require('../wg_static_agent/components/buttons/buttons.html')
        //console.log(html)
        return html
    })
    */