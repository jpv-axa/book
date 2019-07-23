import commonInput from './common'

class selectOneInput extends commonInput {
	init() {
		super.init()

		// on desktop, cancels the display of the native dropdown
		this.el.field.addEventListener('pointerdown', this.onOpen.bind(this))

		// on desktop, prepare a replacement for the native dropdown
		// delagate keyboard and A11Y management
		this.setupOptions()

		if (this.el.hasAttribute('+opened')) {
			this.openSuggestions()
		}
	}

	openSuggestions() {
		this.AwesompleteInstance.evaluate()
		this.AwesompleteInstance.open()
	}

	setupOptions() {
		const input = document.createElement('input')
		this.el.field.insertAdjacentElement('afterend', input)

		// update the real index when the false select is clicked
		input.addEventListener('awesomplete-selectcomplete', (selection) => {
			this.el.field.selectedIndex = selection.text.value
			input.value = '' //just to be able to open it a 2nd time
			this.el.field.classList.remove('opened')
		})
		input.addEventListener('awesomplete-open', (selection) => {
			input.focus()
		})

		// from real options to Awesomplete list eg: [{ label: "Belarus", value: "BY" }, …]
		let options = Array.prototype.map.call(this.el.field.options, ((option, index) => {
			return {
				label: option.label, // what the user will see
				value: index // used by ourselves to retrieve the original option
			}
		}))

		this.AwesompleteInstance = new Awesomplete(input, {
			minChars: 0,
			list: options,
			maxItems: options.length,
			sort: false,
			// mark the current option with aria-selected
			item: (current) => {
				const el = document.createElement('li')
				el.innerText = current.label
				if (this.el.field.selectedIndex === current.value)
					el.setAttribute('aria-selected', 'true')
				else
					el.setAttribute('aria-selected', 'false')

				return el
			}
		})

	}

	onOpen(e) {
		e.preventDefault()
		if (this.AwesompleteInstance.ul.hasAttribute('hidden')) {
			this.AwesompleteInstance.evaluate()
			this.el.field.classList.add('opened')
		} else {
			this.AwesompleteInstance.close()
			this.el.field.classList.remove('opened')
		}
	}
}

export default selectOneInput