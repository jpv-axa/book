import textInput from './textInput'
import './index.scss'

import {
	throws
} from 'assert';

class axaInput extends HTMLElement {
	/*	static get observedAttributes() {
			return ['icon']
		}*/

	constructor() {
		super()

		// manage only one input
		let field = this.querySelectorAll('input')
		if (field.length > 1)
			throw new Error('axa-input supports only one type of input element')

		// create a simple text element if needed
		else if (field.length < 1)
			field = document.createElement('input')
		else
			field = field[0]
		this.field = field

		// manage weird states
		if (this.hasAttribute('+invalid') &&
			this.hasAttribute('+valid'))
			throw new TypeError('You have to choose between valid and invalid state')

		// console.log(this.field.type)
		// delagating behaviour to other classes
		switch (this.field.type) {
			case 'text':
				this.el = new textInput(this)
		}

		this.el.init()
	}

}

customElements.define('axa-input', axaInput)
export default axaInput