import {
    create
} from '@storybook/theming';

import logo from '../dg/components/atoms/logo/materials/a-logo--default.svg'

export default create({
    base: 'light',

    colorPrimary: '#00005b',
    colorSecondary: '#f07662',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: '#f07662',
    appBorderRadius: 1,

    // Typography
    fontBase: '"Source Sans Pro", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#00005b',
    textInverseColor: '#cccccc',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: '#f07662',
    barBg: '#00008f',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'Axa Brand Design System',
    brandUrl: 'https://design.axa.com/',
    brandImage: logo //'https://www.axa.ch/etc/clientlibs/axa/frontend-lib/images/logo-AXA.svg'
});