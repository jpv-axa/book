import svgSearch from '!!raw-loader!./materials/search-currentcolor.svg'
import svgClose from '!!raw-loader!./materials/close-currentcolor.svg'
import svgMenu from '!!raw-loader!./materials/menu-currentcolor.svg'

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
		this.empty()
		switch (this.getAttribute('icon')) {
			case 'search':
				this.insertAdjacentHTML('afterbegin', svgSearch)
				break
			case 'close':
				this.insertAdjacentHTML('afterbegin', svgClose)
				break
			case 'menu':
				this.insertAdjacentHTML('afterbegin', svgMenu)
				break
		}
	}

	empty() {
		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}

	}
}

customElements.define('axa-icon', axaIcon)
export default axaIcon