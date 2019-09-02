import { configure, addParameters, addDecorator } from '@storybook/html'
import theme from './theme'

import inPercy from '@percy-io/in-percy'
//import faker from 'faker';
import mockdate from 'mockdate'

// Specifically for Percy.io testing, we freeze the time to a precise date
if (inPercy()) {
	// Seed faker so it generates deterministic fake data
	// faker.seed(123);
	// Mock the current date
	mockdate.set('October 21, 2019 12:30:15')
}

// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
	options: {
		theme,
		panelPosition: 'bottom',
		showPanel: true
	}
	/*viewport: {
        defaultViewport: 'iphone6'
    },*/
})
configure(function loadStories() {
	const req = require.context('../dg/stories', true, /\.js$/)
	req.keys().forEach(filename => req(filename))
}, module)
