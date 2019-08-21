import commonInput from './common'
import Awesomplete from 'awesomplete'

class selectOneInput extends commonInput {
	init() {
		super.init()

		// on desktop, cancels the display of the native dropdown
		if (!this.disabled) {
			this.el.field.addEventListener('pointerdown', this.onOpen.bind(this))
		}

		// on desktop, prepare a replacement for the native dropdown
		// delegate keyboard and A11Y management
		if (!this.disabled) this.setupOptions(this.el.field)

		/*if (this.el.hasAttribute('+opened'))
			this.open()*/

		if (this.el.hasAttribute('+placeholder')) {
			let fakePlaceholderEl = new Option(
				this.el.getAttribute('+placeholder'),
				'',
				true,
				true
			)
			fakePlaceholderEl.setAttribute('disabled', 'disabled')
			this.el.field.options[this.el.field.options.length] = fakePlaceholderEl
			this.el.field.classList.add('with-placeholder-active')
			this.el.field.addEventListener('change', () =>
				this.el.field.classList.remove('with-placeholder-active')
			)
		}
	}

	setupOptions(fieldSelect) {
		// this input really is there only for Awesomplete to work and communicate with us
		const input = document.createElement('input')
		fieldSelect.insertAdjacentElement('afterend', input)

		// update the real index when the false select is clicked
		input.addEventListener('awesomplete-selectcomplete', selection => {
			// fisrt deal with the fake input and the style
			input.value = '' //just to be able to open it a 2nd time
			fieldSelect.classList.remove('opened')
			// update the value and trigger the onchange event for the real form select
			fieldSelect.selectedIndex = selection.text.value
			fieldSelect.dispatchEvent(new Event('change'))
		})
		input.addEventListener('awesomplete-open', selection => {
			input.focus()
		})

		// from real options to Awesomplete list eg: [{ label: "Belarus", value: "BY" }, …]
		let options = Array.prototype.map.call(
			fieldSelect.options,
			(option, index) => {
				return {
					label: option.label, // what the user will see
					value: index // used by ourselves to retrieve the original option
				}
			}
		)

		fieldSelect.AwesompleteInstance = new Awesomplete(input, {
			minChars: 0,
			list: options,
			maxItems: options.length,
			sort: false,
			// mark the current option with aria-selected : used by styling, and good for a11Y
			item: current => {
				const el = document.createElement('li')
				el.innerText = current.label
				if (fieldSelect.selectedIndex === current.value)
					el.setAttribute('aria-selected', 'true')
				else el.setAttribute('aria-selected', 'false')

				return el
			}
		})
	}

	toggleOpened() {
		this.onOpen({
			preventDefault: () => null,
			target: this.el.field
		})
	}

	onOpen(e) {
		e.preventDefault()
		const elSelect = e.target
		if (elSelect.AwesompleteInstance.ul.hasAttribute('hidden')) {
			elSelect.AwesompleteInstance.evaluate()
			elSelect.classList.add('opened')
		} else {
			elSelect.AwesompleteInstance.close()
			elSelect.classList.remove('opened')
		}
	}
}

export default selectOneInput
