import styles from './index.scss'
import typo from '../../atoms/typography'

customElements.define('axa-footer', class Footer extends HTMLElement {
	constructor() {
		super()
		this.classList.add('m-footer')

		const legal = this.makeLegal(this.querySelector('[slot=legal]'))

		// only 2 values allowed, blue being the default
		this.design = this.getAttribute('+design') === 'white' ? 'white' : 'blue'

		this.classList.add('m-footer__' + this.design)

		let columns = []
		this.querySelectorAll('ul').forEach(colum => columns.push(this.makeColumn(colum)))

		if (columns.length > 3) {
			console.warn('Guidelines disallows more than 3 sections, please consider moving more links to the first columns.')
			columns = columns.slice(0, 3)
		}

		const social = this.makeSocial(this.querySelector('[slot=social]'))

		// empty
		while (this.firstChild) {
			this.removeChild(this.firstChild)
		}

		this.insertAdjacentHTML('afterbegin', `
		<footer>
			<slot name=social></slot>
			<slot name=content></slot>
			<slot name=legal></slot>
		</footer>
		`)

		this.querySelector('slot[name=legal]').appendChild(legal)
		if (social)
			this.querySelector('slot[name=social]').appendChild(social)
		columns.forEach(col => this.querySelector('slot[name=content]').appendChild(col))
	}

	// @return from the original Element, generates an HTML string for each col
	makeColumn(el) {
		const title = el.getAttribute('title')
		el.querySelectorAll('li').forEach(el => el.classList.add('a-typo__link'))

		return el
	}

	makeLegal(el) {
		// default global copyright
		if (!el) {
			el = document.createElement('div')
			el.setAttribute('slot', 'legal')
			el.appendChild(document.createTextNode(`© ${(new Date()).getFullYear()} AXA All Rights Reserved`))
		}

		el.classList.add('a-typo__legals')

		return el
	}

	makeSocial(el) {
		if (!el) return
		const elTitle = document.createElement('h5')
		elTitle.innerText = el.getAttribute('title')
		const elContainer = document.createElement('div')
		elContainer.insertAdjacentHTML('afterbegin', el.innerHTML)
		elContainer.insertAdjacentElement('afterbegin', elTitle)
		return elContainer
	}
})