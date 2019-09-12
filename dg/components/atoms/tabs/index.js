import './index.scss'

class axaTabs extends HTMLElement {
	constructor() {
		super()

		const elTabs = this.querySelectorAll('li')
		// some sanity checks
		if (!elTabs || elTabs.length === 0)
			throw new Error('There should be at least 2 tabs (LI tags)')
		else if (elTabs.length > 8)
			console.warn('There never should be more than 8 tabs')
		else if (elTabs.length < 2) console.warn('There should be at least 2 tabs')

		// if no tab is selected by markup, select the first one
		let elSelected = this.querySelector('li[aria-selected=true]') || elTabs[0]
		elSelected.setAttribute('aria-selected', true)
		// add A11Y
		this.querySelector('UL').setAttribute('role', 'tablist')
		let numberOfIcons = 0
		// manage disabled state, add A11Y
		elTabs.forEach(el => {
			if (el.hasAttribute('+disabled')) {
				el.classList.add('disabled')
			}
			// A11Y
			el.setAttribute('role', 'tab')
			el.id = getOrSetId(el)
			// icons setup (if any)
			if (el.hasAttribute('+icon')) {
				numberOfIcons++
				el.insertAdjacentHTML(
					'afterbegin',
					'<axa-icon +icon=' + el.getAttribute('+icon') + '></axa-icon>'
				)
			}
			// bind to the DOM events
			el.addEventListener('click', this.onTabChange)
		})

		if (numberOfIcons > 0 && numberOfIcons !== elTabs.length)
			console.warn(
				'All of your tabs should have an icon set up. We replace missing ones by a default one.'
			)
		// bind to our custom event
		this.addEventListener('selected', e => {
			this.switchToContent(e.detail.contentID)
		})
		// add A11Y on the content
		this.findContent(elTabs).forEach((el, index) => {
			el.setAttribute('role', 'tabpanel')
			el.setAttribute('aria-labelledby', elTabs[index].id)
			// manage classes use for styling
			el.classList.add('a-tabcontainer')
		})
		this.switchToContent(elSelected.getAttribute('aria-controls'))
	}
	/**
	 * Triggered by a click, will update the tabs UI and fire the 'selected' event at the component level
	 * @param {Event} e
	 */
	onTabChange(e) {
		const elTab = e.currentTarget
		const container = elTab.parentNode.parentNode // we're on the LI, we get up to the axa-tab element
		// disabled means we dont do anything
		if (elTab.hasAttribute('+disabled')) return
		// already selected ? ignore this click
		if (elTab.getAttribute('aria-selected') === 'true') return
		// unselect previous tab
		container
			.querySelector('li[aria-selected=true]')
			.setAttribute('aria-selected', false)
		// set as selected
		elTab.setAttribute('aria-selected', true)
		// advertize the rest of the world
		container.dispatchEvent(
			new CustomEvent('selected', {
				detail: {
					contentID: elTab.getAttribute('aria-controls')
				}
			})
		)
		// console.log(elTab.getAttribute('aria-controls'))
	}
	/**
	 * If the ID is given and the element exists, will hide the other content containers and reveal this one
	 * @param {String} contentID The ID of the content element to reveal, somewhere in the DOM
	 */
	switchToContent(contentID) {
		const target = document.getElementById(contentID)
		if (!target)
			return console.warn(
				'The element with "' + contentID + '" ID has not been found.'
			)
		const elContents = this.findContent(this.querySelectorAll('li'))
		// hide all known elements
		elContents.forEach(el => {
			el.setAttribute('aria-hidden', true)
		})
		// reveal our element
		target.setAttribute('aria-hidden', false)
	}
	/**
	 * Will look in the DOM for the containers referenced by the tabs with attribute aria-controls
	 * @param {HTMLCollection} elTabs
	 * @returns {HTMLElement[]} a list of DOM elements containing the content we want to manipulate
	 */
	findContent(elTabs) {
		const containerEls = []
		elTabs.forEach(elTab => {
			let elID = elTab.getAttribute('aria-controls')
			let elEl = document.getElementById(elID)
			if (elEl) containerEls.push(elEl)
			else console.warn('Did not find an element with ID=' + elID)
		})
		return containerEls
	}
}

// shared between all instances on the page, so that IDs are unique
var counter = 0
/**
 * @param {HTMLElement} el
 * @returns {String} a new ID, or the ID already present on the element
 */
function getOrSetId(el) {
	let id = el.id
	if (!id) id = 'axa-tabs_tab__' + counter++
	return id
}

customElements.define('axa-tabs', axaTabs)
export default axaTabs
