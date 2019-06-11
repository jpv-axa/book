import svgSearch from '!!raw-loader!./materials/search.svg'

class axaIcon extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = svgSearch
	}
}

customElements.define('axa-icon', axaIcon)
export default axaIcon