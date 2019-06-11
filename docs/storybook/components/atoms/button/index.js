//import * as icons from '@axa-ch/materials'
//import upperCamelCase from 'uppercamelcase'
import styles from './index.scss'
//import '@axa-ch/patterns-library-polyfill'
import "@babel/polyfill"
class AxaButton extends HTMLElement {
    static get observedAttributes() {
        return ['+icon', 'disabled']
    }
    attributeChangedCallback(attr, old, value) {
        // console.log(attr, old, value)
        if (old === value)
            return
        switch (attr) {
            case '+icon':
                this.updateIcon()
                break
            case 'disabled':
                if (value === null)
                    this.realButton.removeAttribute('disabled')
                else
                    this.realButton.setAttribute('disabled', 'disabled')
                break
        }
    }

    constructor() {
        super()

        let textContent = this.textContent || 'See more'

        this.innerHTML = `<button>${textContent}</button>`
        this.realButton = this.querySelector('button')

        // default styling is primary button
        if (!this.classList.contains('a-button--secondary') &&
            !this.classList.contains('a-button--secondary--white'))
            this.classList.add('a-button--primary')


        this.classList.add('a-button')
        this.classList.add('a-button--motion')
        this.realButton.classList.add('a-typo__button')

    }

    // updateIcon() {
    //     let name = upperCamelCase(this.getAttribute('+icon')) + 'Svg'
    //     const icon = document.createElement('svg')
    //     icon.classList.add('a-button__icon')
    //     //icon.src = 'data:image/svg+xml;charset=UTF-8,' + icons[name]
    //     icon.innerHTML = icons[name]
    //     this.appendChild(icon)
    // }
}

customElements.define('axa-button', AxaButton, {
    //extends: 'button'
})

export default AxaButton