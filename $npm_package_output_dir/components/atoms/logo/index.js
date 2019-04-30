import * as logo from '@axa-ch/patterns-library/src/assets/icons/logo-AXA.svg'

customElements.define('axa-logo', class axaLogo extends HTMLElement {
    constructor() {
        super()
        // console.log('logo', logo) // here webpack gives us the URL instead of the content of the SVG
        this.innerHTML = `<img alt="Axa logo" src=${logo} />`
        //this.setAttribute('src', 'data:image/svg+xml;charset=UTF-8,' + logo)
    }
})