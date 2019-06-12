import svgSearch from '!!raw-loader!./materials/search.svg'
import svgClose from '!!raw-loader!./materials/close.svg'
import svgMenu from '!!raw-loader!./materials/menu.svg'

class axaIcon extends HTMLElement {
	static get observedAttributes() {
		return ['icon']
	}
	attributeChangedCallback(attr, old, value) {
		//debugger
		if (old === value)
			return
		switch (attr) {
			case 'icon':
				this.drawSVG()
				break
		}
	}

	constructor() {
		super()
		this.drawSVG()
	}

	drawSVG() {
		switch (this.getAttribute('icon')) {
			case 'search':
				this.innerHTML = svgSearch
				break
			case 'close':
				this.innerHTML = svgClose
				break
			case 'menu':
				this.innerHTML = svgMenu
				break
		}
	}
}

customElements.define('axa-icon', axaIcon)
export default axaIcon