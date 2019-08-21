import textInput from './input-text'
// awesomplete implements correctly the accessibility, the keyboard navigation
// and is hackable enough to be correctly styled
import Awesomplete from 'awesomplete'

class autocompleteInput extends textInput {
	init() {
		this.dataList = this.el.querySelector('datalist')
		if (!this.dataList)
			throw new TypeError('Please provide your options with a standard <datalist> element')
		// HTML is reset
		super.init()

		// re-introduce the datalist
		this.el.appendChild(this.dataList)
		// do the bindings for the user, if the developer did not make it
		let targetId = this.el.field.getAttribute('list')
		if (this.dataList.id != targetId) {
			// build an ID from the main field ID
			if (!this.dataList.id)
				this.dataList.id = 'datalist-' + this.el.field.id
			// sync el[list] and datalist[id]
			this.el.field.setAttribute('list', this.dataList.id)
		}

		// delegate keyboard and A11Y management
		this.AwesompleteInstance = new Awesomplete(this.el.field)
		if (this.el.hasAttribute('+opened')) {
			this.openSuggestions()
		}
	}

	openSuggestions() {
		this.AwesompleteInstance.evaluate()
		this.AwesompleteInstance.open()
	}

}

export default autocompleteInput