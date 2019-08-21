import textInput from './input-text'
import passwordInput from './input-password'
import autocompleteInput from './input-autocomplete'
import selectOneInput from './input-select-one'
import datePicker from './input-datepicker'
import './index.scss'

class axaInput extends HTMLElement {
	static get observedAttributes() {
		return ['+valid', '+invalid', '+disabled', '+revealed', '+opened']
	}

	attributeChangedCallback(attr, old, value) {
		if (old === value) return
		switch (attr) {
			case '+valid':
				this.classList.add('valid')
				this.classList.remove('invalid')
				break
			case '+invalid':
				this.classList.add('invalid')
				this.classList.remove('valid')
				break
			case '+disabled': // TODO  : catch when +disabled is REMOVED
				this.classList.add('disabled')
				this.el.disabled = true
				break
			case '+opened': // TODO  : catch when +opened is REMOVED
				if (this.el instanceof autocompleteInput) this.el.openSuggestions()
				else if (
					this.el instanceof selectOneInput ||
					this.el instanceof datePicker
				)
					this.el.toggleOpened()
				else
					console.warn('+opened attribute is not supported for this element.')
				break
			case '+revealed': // TODO  : catch when +revealed is REMOVED
				if (this.el instanceof passwordInput) this.el.toggleRevealer()
				else
					console.warn('+revealed attribute is not supported for this element.')
				break
		}
	}

	constructor() {
		super()

		// manage only one input
		let field = [
			...this.querySelectorAll('input'),
			...this.querySelectorAll('select')
		]
		if (field.length > 1)
			throw new Error('axa-input supports only one type of input element')
		// create a simple text element if needed
		else if (field.length < 1) field = document.createElement('input')
		else field = field[0]
		this.field = field
		// manage weird states
		if (this.hasAttribute('+invalid') && this.hasAttribute('+valid'))
			throw new TypeError('You have to choose between valid and invalid state')

		// console.log(this.field.type)
		// delagating behaviour to other classes
		switch (this.field.type) {
			case 'text':
				if (this.field.hasAttribute('list'))
					this.el = new autocompleteInput(this)
				else this.el = new textInput(this)
				break
			case 'password':
				this.el = new passwordInput(this)
				break
			case 'select-one':
				this.el = new selectOneInput(this)
				break
			case 'date':
				this.el = new datePicker(this)
				break
			default:
				throw new TypeError(
					`This type of input (${this.field.type}) is not supported yet.`
				)
		}

		this.el.init()
		// manage styling depending on states
		if (this.el.disabled) this.classList.add('disabled')
		else this.classList.remove('disabled')
	}
}

customElements.define('axa-input', axaInput)
export default axaInput
