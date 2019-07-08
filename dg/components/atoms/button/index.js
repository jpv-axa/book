// to work in IE11
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'
import '@webcomponents/custom-elements'


import styles from './index.scss'


class AxaButton extends HTMLElement {
    static get observedAttributes() {
        return ['+icon', 'disabled']
    }
    attributeChangedCallback(attr, old, value) {
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

        this.textContent = ''

        //this.innerHTML = 
        //this.insertAdjacentHTML('beforebegin', `<button>${textContent}</button>`)
        this.insertAdjacentHTML('afterbegin', `<button>${textContent}</button>`)

        this.realButton = this.querySelector('button')

        // default styling is primary button
        if (!this.classList.contains('a-button--secondary') &&
            !this.classList.contains('a-button--secondary--white'))
            this.classList.add('a-button--primary')


        this.classList.add('a-button')
        this.classList.add('a-button--motion')
        this.realButton.classList.add('a-typo__button')

    }
}

customElements.define('axa-button', AxaButton, {
    //extends: 'button'
})

export default AxaButton