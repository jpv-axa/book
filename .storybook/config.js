import {
    configure
} from '@storybook/html';

function loadStories() {
    require('../index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);