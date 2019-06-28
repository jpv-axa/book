import {
    configure,
    addParameters,
    addDecorator
} from '@storybook/html'
import theme from './theme'

// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
    options: {
        theme,
        panelPosition: 'bottom',
        showPanel: true
    },
    /*viewport: {
        defaultViewport: 'iphone6'
    },*/

})
configure(function loadStories() {
    const req = require.context('../dg/stories', true, /\.js$/);
    req.keys().forEach(filename => req(filename));
}, module)