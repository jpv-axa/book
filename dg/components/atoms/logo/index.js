import logoDefault from './materials/a-logo--default.svg'
import logoOverImageBlue from './materials/a-logo--overImage--blue.svg'
import logoOverImageWhite from './materials/a-logo--overImage--white.svg'
// !!raw-loader!
import './index.scss'

customElements.define('axa-logo', class axaLogo extends HTMLElement {
    constructor() {
        super()
        let image = logoDefault;
        if (this.hasAttribute('overimage')) {
            if (this.getAttribute('overimage') === 'blue')
                image = logoOverImageBlue
            if (this.getAttribute('overimage') === 'white')
                image = logoOverImageWhite
        }

        this.insertAdjacentHTML('afterbegin', `<img alt="Axa logo" src="${image}" />`)
        //this.setAttribute('src', 'data:image/svg+xml;charset=UTF-8,' + logo)
    }
})