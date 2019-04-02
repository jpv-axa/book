import {
    configure,
    addParameters
} from '@storybook/html'
import theme from './theme'

// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
    options: {
        theme,
        panelPosition: 'right'
    },
    /*viewport: {
        defaultViewport: 'iphone6'
    },*/

})
configure(function loadStories() {
    require('../index.js')
}, module)