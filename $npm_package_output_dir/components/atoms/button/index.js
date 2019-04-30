import * as icons from '@axa-ch/materials'
import upperCamelCase from 'uppercamelcase'
import styles from './index.scss'

class AxaButton extends HTMLButtonElement {
    static get observedAttributes() {
        return ['data-icon']
    }
    attributeChangedCallback(attr, old, value) {
        //console.log('cool', old, value)
        if (old === value)
            return
        switch (attr) {
            case 'data-icon':
                this.updateIcon()
                break
        }
    }

    constructor() {
        super()
        /*const dumbDiv = document.createElement('div')
        const shadow = dumbDiv.attachShadow({
            mode: 'open'
        })
*/
        // console.log('cool')
        this.textContent = this.textContent || '! AxaButton !'
        this.classList.add('a-button')
        this.classList.add('a-button--motion')
        this.classList.add('a-typo__button')

        /*if (this.getAttribute('data-icon')) {
            this.updateIcon()
        }*/

        // manage CSS
        /*const style = document.createElement('style')
        style.textContent = styles
        shadow.appendChild(style)
        dumbDiv.appendChild(shadow)
        this.appendChild(dumbDiv)*/
    }

    updateIcon() {
        let name = upperCamelCase(this.getAttribute('data-icon')) + 'Svg'
        const icon = document.createElement('svg')
        icon.classList.add('a-button__icon')
        //icon.src = 'data:image/svg+xml;charset=UTF-8,' + icons[name]
        icon.innerHTML = icons[name]
        this.appendChild(icon)
    }
}

customElements.define('axa-button', AxaButton, {
    extends: 'button'
})

export default AxaButton