import svgSearch from '!!raw-loader!./materials/search-currentcolor.svg'
import svgClose from '!!raw-loader!./materials/close-currentcolor.svg'
import svgMenu from '!!raw-loader!./materials/menu-currentcolor.svg'
import logoFacebook from '!!raw-loader!./materials/logo_facebook-currentcolor.svg'
import logoLinkedin from '!!raw-loader!./materials/logo_linkedin-currentcolor.svg'
import logoInstagram from '!!raw-loader!./materials/logo_instagram-currentcolor.svg'
import logoTwitter from '!!raw-loader!./materials/logo_twitter-currentcolor.svg'
import logoYoutube from '!!raw-loader!./materials/logo_youtube-currentcolor.svg'

import notFound from '!!raw-loader!./materials/not_interested-currentcolor.svg'


class axaIcon extends HTMLElement {
	static get observedAttributes() {
		return ['icon', '+icon']
	}
	attributeChangedCallback(attr, old, value) {
		//debugger
		if (old === value)
			return
		switch (attr) {
			case 'icon':
			case '+icon':
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
		let icon = this.getAttribute('icon') || this.getAttribute('+icon')
		let innerSVG = notFound
		switch (icon) {
			case 'search':
				innerSVG = svgSearch
				break
			case 'close':
				innerSVG = svgClose
				break
			case 'menu':
				innerSVG = svgMenu
				break
			case 'facebook':
				innerSVG = logoFacebook
				break
			case 'facebook':
				innerSVG = logoFacebook
				break
			case 'linkedin':
				innerSVG = logoLinkedin
				break
			case 'instagram':
				innerSVG = logoInstagram
				break
			case 'twitter':
				innerSVG = logoTwitter
				break
			case 'youtube':
				innerSVG = logoYoutube
				break
			default:
				console.warn(`Icon with id ${icon} does not exist.`)
		}

		this.insertAdjacentHTML('afterbegin', innerSVG)

	}

	empty() {
		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}

	}
}

customElements.define('axa-icon', axaIcon)
export default axaIcon