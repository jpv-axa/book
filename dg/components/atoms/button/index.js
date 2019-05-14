import * as icons from '@axa-ch/materials'
import upperCamelCase from 'uppercamelcase'
import styles from './index.scss'

class AxaButton extends HTMLButtonElement {
    static get observedAttributes() {
        return ['+icon']
    }
    attributeChangedCallback(attr, old, value) {
        //console.log('cool', old, value)
        if (old === value)
            return
        switch (attr) {
            case '+icon':
                this.updateIcon()
                break
        }
    }

    constructor() {
        super()

        this.textContent = this.textContent || 'See more'
        this.classList.add('a-button')
        this.classList.add('a-button--motion')
        this.classList.add('a-typo__button')

    }

    updateIcon() {
        let name = upperCamelCase(this.getAttribute('+icon')) + 'Svg'
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