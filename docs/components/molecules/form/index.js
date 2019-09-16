import './index.scss'

customElements.define(
	'axa-form',
	class Form extends HTMLElement {
		constructor() {
			super()
			this.classList.add('m-form')
		}
	}
)
