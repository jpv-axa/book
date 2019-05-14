import styles from './index.scss'
import typo from '../../atoms/typography'
import AxaButton from '../../atoms/button'

customElements.define('axa-hero-cover', class HeroCover extends HTMLElement {
    constructor() {
        super()
        //const dumbDiv = document.createElement('div')
        this.classList.add('m-hero-cover')

        const imgURL = this.getAttribute('+src') || 'https://imgplaceholder.com/160x90?text=16++9&font-size=50'

        this.style.backgroundImage = `url(${imgURL})`

        let cta = this.querySelector('[slot=call-to-action]')
        if (!cta) {
            cta = new AxaButton()
            cta.setAttribute('is', 'axa-button')
            cta.textContent = 'Read More'
            // cta.setAttribute('+icon', 'arrow-right')
        }

        let content = this.querySelector('[slot=text-content]')
        if (!content) content = ''
        else content = content.innerHTML

        let legalContent = this.querySelector('[slot=legal-content]')



        // only 2 options allowed
        let direction = this.getAttribute('+direction') === 'rtl' ? 'rtl' : 'ltr'
        let design = this.getAttribute('+design') === 'wob' ? 'wob' : 'bow'

        this.innerHTML = `
            <div class="m-hero-cover__text-background m-hero-cover__text-background--${direction} m-hero-cover__text-background--${direction}--${design}">
                <div class=m-hero-cover__content>
                    <h5 class=a-typo__tagline>${this.getAttribute('+tagline-title') || 'Tagline title'}</h5>
                    <h2 class=a-typo__page-title>${this.getAttribute('+main-title') || 'Main Title'}</h2>
                    ${content ? `<p class="a-typo__highlight">${content}</p>`:''}
                    ${legalContent ? `<p class="a-typo__legals">${legalContent.innerHTML}</p>`:''}
                    <slot name=call-to-action />
                </div>
            </div>
            <img style=display:none alt= src=${imgURL} />
            `

        this.querySelector('slot[name=call-to-action]').appendChild(cta)
    }
})