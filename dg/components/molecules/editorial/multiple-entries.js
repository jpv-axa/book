import './multiple-entries.scss'

customElements.define(
	'axa-multiple-entries',
	class MultipleEntries extends HTMLElement {
		constructor() {
			super()
			this.classList.add('m-multiple-entries')

			// get the title from the first Hx we find
			const elTitle = this.querySelector('h1, H2, H3, H4, H5')
			if (elTitle.length === 0)
				throw new TypeError('Please provide an HTML title (Hx).')
			elTitle.classList.add('m-multiple-entries__title')
			// the list is the first UL we find
			const elListContainer = this.querySelector('ul')
			if (elListContainer.length === 0)
				throw new TypeError('Please provide an HTML list (UL > LI).')
			elListContainer.classList.add('m-multiple-entries__entries')
			elListContainer.querySelectorAll('li').forEach(el => {
				el.classList.add('m-multiple-entries__entry')
			})
			// in each LI, there is an Hx title that marks the label
			elListContainer
				.querySelectorAll('h1, H2, H3, H4, H5')
				.forEach(el => el.classList.add('m-multiple-entries__entry__label'))
			// the sibling following the title is our subtitle
			const elLabels = elListContainer.querySelectorAll(
				'h1 + *, H2 + *, H3 + *, H4 + *, H5'
			)
			elLabels.forEach(el =>
				el.classList.add('m-multiple-entries__entry__text')
			)
		}
	}
)
