class commonInput {
	constructor(el) {
		this.el = el
	}

	empty() {
		while (this.el.firstChild) {
			this.el.removeChild(this.el.firstChild);
		}
	}

	// generate or get an ID + NAME and coordinates both
	// if the developer has defined a value for each, respect that
	getOrSetId() {
		//debugger
		let id = this.el.field.getAttribute('id')
		let name = this.el.field.getAttribute('name')
		// generate if none of both
		if (!id && !name)
			name = id = this.el.type + '_' + Math.round(Math.random() * 1000000000)
		// sync id and name
		if (!id && name)
			id = name
		if (!name && id)
			name = id

		this.el.field.setAttribute('id', id)
		this.el.field.setAttribute('name', name)
	}

	// inserts a label with text coming from +label attribute
	// @return the label as an element
	setupLabel() {
		this.labelText = this.el.getAttribute('+label')
		if (!this.labelText)
			this.labelText = 'Default Label'
		// return `<label for="${this.el.field.getAttribute('id')}">${this.labelText}</label>`
		let labelEl = document.createElement('label')
		labelEl.setAttribute('for', this.el.field.getAttribute('id'))
		labelEl.innerText = this.labelText
		return labelEl
	}

	// @return {null|HTMLElement}
	getError() {
		let errorMessage = this.el.getAttribute('+error') || 'Error message'
		if (!this.el.hasAttribute('+invalid'))
			return null

		let errorEl = document.createElement('span')
		errorEl.innerText = errorMessage
		errorEl.setAttribute('role', 'alert')
		errorEl.setAttribute('id', this.generateErrorFieldId())
		errorEl.classList.add('error')
		return errorEl
	}

	generateErrorFieldId() {
		return this.el.field.getAttribute('id') + '_error'
	}

	// generates more markup around the field, in order to style them properly
	prepareFieldForIcon() {
		// 0 prepare our container
		let el = document.createElement('div')
		el.classList.add('with-icon')
		// 1 insert next to the field
		this.el.field.insertAdjacentElement('beforebegin', el)
		// 2 move the field into it
		el.appendChild(this.el.field)
	}
}

export default commonInput