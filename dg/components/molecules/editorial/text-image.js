import styles from './index.scss'
import typo from '../../atoms/typography'
import 'eligrey-classlist-js-polyfill' // needed for IE11

customElements.define('axa-text-image', class TextImage extends HTMLElement {
	constructor() {
		super()
		// get the title from Hx
		const elTitles = this.querySelectorAll('h1, H2, H3, H4, H5')
		if (elTitles.length > 1)
			throw new TypeError('Only one title (Hx) per module allowed.')
		else if (elTitles.length === 0)
			throw new TypeError('Please provide an HTML title (Hx).')
		this.elTitle = elTitles[0]
		this.elTitle.classList.add('a-typo__slice-title')

		// get the image
		let elImage = this.querySelectorAll('picture')
		if (elImage.length === 0)
			elImage = this.querySelectorAll('img')
		if (elImage.length > 1)
			throw new TypeError('Only one image is currently supported.')
		else if (elImage.length === 0)
			throw new TypeError('Please provide one image (picture or img).')
		this.elImage = elImage[0]
		this.elImage.classList.add('axa-text-image__image')
		//console.log(this.elImage)

		// get the content, from the <P> element
		this.elContent = this.querySelector('p')
		if (!this.elContent)
			throw new TypeError('Please provide content inside a P tag.')
		this.elContent.classList.add('a-typo__text')


		this.designVariant = this.getAttribute('+imgPosition') || 'after'
		if (this.designVariant !== 'before' && this.designVariant !== 'after')
			throw new TypeError('The +imgPosition value is either "before" or "after".')

		// remove what's left
		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}
		// re-build HTML with placeholders and semantics
		this.insertAdjacentHTML('afterbegin', `
			<section>
				<div class=axa-text-image__text>
				</div>
			</section>
		`)
		// re-introduce our elements

		// place image before content if requested
		let position = 'beforeend' // default to after
		if (this.designVariant === 'before')
			position = 'afterbegin'
		this.querySelector('section').insertAdjacentElement(position, this.elImage)
		// place the textual content in its box
		this.querySelector('.axa-text-image__text').insertAdjacentElement('afterbegin', this.elContent)
		this.querySelector('.axa-text-image__text').insertAdjacentElement('afterbegin', this.elTitle)

	}
})