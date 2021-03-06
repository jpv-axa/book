import styles from './index.scss'
import typo from '../../atoms/typography'
import AxaButton from '../../atoms/button'
import 'eligrey-classlist-js-polyfill' // needed for IE11
import imgPlaceholder from './1600x900.svg'

customElements.define(
	'axa-hero-cover',
	class HeroCover extends HTMLElement {
		constructor() {
			super()
			//const dumbDiv = document.createElement('div')
			this.classList.add('m-hero-cover')

			const imgURL = this.getAttribute('+src') || imgPlaceholder

			this.style.backgroundImage = `url(${imgURL})`

			let cta = this.querySelector('[slot=call-to-action]')
			if (!cta) {
				cta = new AxaButton()
			}

			let content = this.querySelector('[slot=text-content]')
			if (!content) content = ''
			else content = content.innerHTML

			let legalContent = this.querySelector('[slot=legal-content]')

			// only 2 options allowed
			let direction = this.getAttribute('+direction') === 'rtl' ? 'rtl' : 'ltr'
			this.design = this.getAttribute('+design') === 'wob' ? 'wob' : 'bow'

			while (this.firstChild) {
				this.removeChild(this.firstChild)
			}

			this.insertAdjacentHTML(
				'afterbegin',
				`
            <div class="m-hero-cover__text-background m-hero-cover__text-background--${direction} m-hero-cover__text-background--${direction}--${
					this.design
				}">
                <div class=m-hero-cover__content>
                    <h5 class=a-typo__category>${this.getAttribute(
											'+category-title'
										) || 'Category title'}</h5>
                    <h2 class=a-typo__page-title>${this.getAttribute(
											'+main-title'
										) || 'Main Title'}</h2>
                    ${
											content
												? `<p class="a-typo__highlight">${content}</p>`
												: ''
										}
                    ${
											legalContent
												? `<p class="a-typo__legals">${
														legalContent.innerHTML
												  }</p>`
												: ''
										}
                    <slot name=call-to-action></slot>
                </div>
            </div>
            <img style=display:none alt= src=${imgURL} />
            `
			)

			this.querySelector('slot[name=call-to-action]').appendChild(cta)
			this.convertButtons()
		}

		// look for secondary buttons misused, and convert them if needed
		convertButtons() {
			// if on the small design, or on the large design + white background
			// replace white buttons by blue ones
			if (
				window.matchMedia('(max-width: 64rem)').matches ||
				(window.matchMedia('(min-width: 64rem)').matches &&
					this.design === 'bow')
			)
				this.querySelectorAll('.a-button--secondary--white').forEach(e => {
					e.classList.replace(
						'a-button--secondary--white',
						'a-button--secondary'
					)
				})

			// if on large design + blue background, replace secondary blue by white buttons
			if (
				window.matchMedia('(min-width: 64rem)').matches &&
				this.design === 'wob'
			)
				this.querySelectorAll('.a-button--secondary').forEach(e => {
					e.classList.replace(
						'a-button--secondary',
						'a-button--secondary--white'
					)
				})
		}
	}
)
