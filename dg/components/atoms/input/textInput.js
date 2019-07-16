import commonInput from './common'

class textInput extends commonInput {
	/*constructor(el) {
		this.el = el
	}*/
	init() {
		this.getOrSetId()
		let label = this.setupLabel()
		let errorMessage = this.getError()
		if (errorMessage)
			this.el.field.setAttribute('aria-describedby', this.generateErrorFieldId())

		this.el.insertAdjacentElement('afterbegin', label)
		let field = this.el.field
		let info = this.el.querySelector('[slot=info]')
		//debugger
		// Accessibility is setup, let's rebuild the HTML
		this.empty()
		this.el.appendChild(label)
		this.el.appendChild(field)
		if (errorMessage)
			this.el.appendChild(errorMessage)
		if (info)
			this.el.appendChild(info)


		this.disabled = this.el.field.disabled
	}
}

export default textInput