import styles from './index.scss'
import typo from '../../atoms/typography'
import AxaButton from '../../atoms/button'

customElements.define('axa-hero-cover', class HeroCover extends HTMLElement {
    constructor() {
        super()
        //const dumbDiv = document.createElement('div')
        this.classList.add('m-hero-cover')

        const imgURL = this.getAttribute('data-src') || 'https://image-placeholder.com/images/actual-size/1600x1200.png'

        this.style.backgroundImage = `url(${imgURL})`

        let cta = this.querySelector('[slot=call-to-action]')
        if (!cta) {
            cta = new AxaButton()
            cta.textContent = 'Read More'
            cta.setAttribute('data-icon', 'arrow-right')
        }

        let content = this.querySelector('[slot=text-content]')
        if (!content) content = '&nbsp;'
        else content = content.innerHTML

        // only 2 options allowed
        let direction = this.getAttribute('data-direction') === 'rtl' ? 'rtl' : 'ltr'
        let design = this.getAttribute('data-design') === 'wob' ? 'wob' : 'bow'

        this.innerHTML = `
            <div class="m-hero-cover__text-background m-hero-cover__text-background--${direction} m-hero-cover__text-background--${direction}--${design}">
                <h5 class=a-typo__title>
                ${this.getAttribute('data-category-title') || 'Category title'}</h5>
                <h2 class=a-typo__page-title>${this.getAttribute('data-main-title') || 'Main Title'}</h2>
                <img style=display:none alt= src=${imgURL} />
                <p class="a-typo__text">${content}</p>
                <slot name=call-to-action />
            </div>
        `

        this.querySelector('slot[name=call-to-action]').appendChild(cta)
    }
})