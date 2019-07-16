import textInput from './input-text'

import svgIconReveal from '!!raw-loader!../icon/materials/eye-currentcolor.svg'
import svgIconHide from '!!raw-loader!../icon/materials/eye_stroke-currentcolor.svg'


class passwordInput extends textInput {
	init() {
		super.init()
		this.prepareFieldForIcon()
		// console.log('I’m a password')
		this.elRevealer = document.createElement('button')
		this.elRevealer.innerHTML = svgIconReveal
		this.elRevealer.classList.add('revealer')
		this.el.field.insertAdjacentElement('afterend', this.elRevealer)

		this.elRevealer.addEventListener('click', this.toggleRevealer.bind(this))
	}

	toggleRevealer() {
		if (this.el.field.type === 'password') {
			this.el.field.type = 'text'
			this.elRevealer.innerHTML = svgIconHide
		} else {
			this.el.field.type = 'password'
			this.elRevealer.innerHTML = svgIconReveal
		}
	}
}

export default passwordInput