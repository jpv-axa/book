import './index.scss'
import '../../atoms/logo'

import '@axa-ch/icon'

customElements.define('axa-header-menu', class HeaderMenu extends HTMLElement {
    static get observedAttributes() {
        return ['+searchable']
    }
    attributeChangedCallback(attr, old, value) {
        if (old === value)
            return
        switch (attr) {
            case '+searchable':
                this.setupSearch()
                break
        }
    }

    constructor() {
        super()
        //debugger
        let originalStructure = this.querySelector('ul')

        this.isSearchable = this.hasAttribute('+searchable')

        // augment the HTML of the user given hierarchy
        if (originalStructure) {
            originalStructure.cloneNode(true)

            let firstLevel = originalStructure.querySelectorAll(':scope>li')
            firstLevel
                .forEach(el => {
                    let link = el.querySelector('a') // top menu texts
                    link.classList.add('a-typo__menu-item')
                    el.setAttribute('textContent', link.textContent)
                    if (el.querySelector('li')) { // submenu
                        el.setAttribute('aria-haspopup', true) // A11Y : auto-add aria attributes
                        el.querySelectorAll('li') // sub menus are regular links
                            .forEach(subEl => subEl.classList.add('a-typo__link'))

                        // pass to submenu the text of the main menu
                        el.querySelector('ul').setAttribute('parentTitle', link.textContent)

                    }
                });


        }

        let cta = this.querySelector('[slot=call-to-action]')


        this.innerHTML = `
            <nav class=m-header>
                <axa-logo></axa-logo>
                <slot name=structure ></slot>
                <slot name=call-to-action ></slot>
               ${this.isSearchable ? ' <axa-icon icon=search></axa-icon>' : '' }
            </nav>
            `

        if (originalStructure)
            this.querySelector('slot[name=structure]').appendChild(originalStructure)

        if (cta)
            this.querySelector('slot[name=call-to-action]').appendChild(cta)

        // demo mode : prevent every click
        this.addEventListener('click', e => e.preventDefault())
        if (this.isSearchable)
            this.setupSearch()
    }

    setupSearch() {
        const svgEl = this.querySelector('axa-icon')
            .renderRoot.querySelector('svg')
        if (!svgEl) // retry a bit later, when the DOM of the button is really ready
            return setTimeout(this.setupSearch.bind(this), 100)

        // SVG given by axa-ch has a fixed width, we modify it on the fly
        svgEl.setAttribute('height', '100%')
        svgEl.setAttribute('width', '100%')

        svgEl.addEventListener('click', this.searchCallback.bind(this))
        /*svgEl.removeAttribute('height')
        svgEl.removeAttribute('width')
*/
    }

    searchCallback() {
        alert('Not implemented yet')
    }

})