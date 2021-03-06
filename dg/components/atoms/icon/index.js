import svgSearch from '!!raw-loader!./materials/search-currentcolor.svg'
import svgClose from '!!raw-loader!./materials/close-currentcolor.svg'
import svgMenu from '!!raw-loader!./materials/menu-currentcolor.svg'
import logoFacebook from '!!raw-loader!./materials/logo_facebook-currentcolor.svg'
import logoLinkedin from '!!raw-loader!./materials/logo_linkedin-currentcolor.svg'
import logoInstagram from '!!raw-loader!./materials/logo_instagram-currentcolor.svg'
import logoTwitter from '!!raw-loader!./materials/logo_twitter-currentcolor.svg'
import logoYoutube from '!!raw-loader!./materials/logo_youtube-currentcolor.svg'
import eye from '!!raw-loader!./materials/eye-currentcolor.svg'
import house from '!!raw-loader!./materials/house-currentcolor.svg'
import more_horiz from '!!raw-loader!./materials/more_horiz-currentcolor.svg'
import more_vert from '!!raw-loader!./materials/more_vert-currentcolor.svg'
import credit_card from '!!raw-loader!./materials/credit_card-currentcolor.svg'
import car from '!!raw-loader!./materials/car-currentcolor.svg'
import flight from '!!raw-loader!./materials/flight-currentcolor.svg'
import health from '!!raw-loader!./materials/health-currentcolor.svg'

import notFound from '!!raw-loader!./materials/not_interested-currentcolor.svg'

class axaIcon extends HTMLElement {
	static get observedAttributes() {
		return ['icon', '+icon']
	}
	attributeChangedCallback(attr, old, value) {
		//debugger
		if (old === value) return
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
			case 'eye':
				innerSVG = eye
				break
			case 'house':
				innerSVG = house
				break
			case 'more_horiz':
				innerSVG = more_horiz
				break
			case 'more_vert':
				innerSVG = more_vert
				break
			case 'credit_card':
				innerSVG = credit_card
				break
			case 'car':
				innerSVG = car
				break
			case 'flight':
				innerSVG = flight
				break
			case 'health':
				innerSVG = health
				break

			default:
				console.warn(`Icon with id ${icon} does not exist.`)
		}

		this.insertAdjacentHTML('afterbegin', innerSVG)
	}

	empty() {
		while (this.firstChild) {
			this.removeChild(this.firstChild)
		}
	}
}

customElements.define('axa-icon', axaIcon)
export default axaIcon
