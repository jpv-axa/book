import './index.scss'

customElements.define(
	'axa-form',
	class Form extends HTMLElement {
		constructor() {
			super()
			this.classList.add('m-form')
			if (!this.classList.contains('m-form--col-1'))
				this.classList.add('m-form--col-2')
		}
	}
)
