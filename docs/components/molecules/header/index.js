import './index.scss'
import '../../atoms/logo'
import '../../atoms/icon'

customElements.define('axa-header-menu', class HeaderMenu extends HTMLElement {
    static get observedAttributes() {
        return ['+searchable']
    }
    attributeChangedCallback(attr, old, value) {
        if (old === value)
            return
        // switch (attr) {
        //     case '+searchable':
        //         this.setupSearch()
        //         break
        // }
    }

    constructor() {
        super()
        //debugger
        let originalStructure = this.querySelector('ul')

        this.isSearchable = this.hasAttribute('+searchable')
        this.isOpened = false

        // augment the HTML of the user given hierarchy
        if (originalStructure) {
            originalStructure.cloneNode(true)
            originalStructure.setAttribute('role', 'menu')

            let firstLevel = originalStructure.querySelectorAll(':scope>li')
            firstLevel
                .forEach(el => {
                    let link = el.querySelector('a') // top menu texts
                    link.classList.add('a-typo__menu-item')
                    el.setAttribute('textContent', link.textContent)
                    if (el.querySelector('li')) { // submenu
                        el.setAttribute('aria-haspopup', true) // A11Y : auto-add aria attributes
                        el.setAttribute('role', 'menuitem')
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
               ${originalStructure ? ' <axa-icon name=menu icon=menu aria-haspopup=true></axa-icon>':''}
            </nav>
            `

        if (originalStructure) {
            this.querySelector('slot[name=structure]').appendChild(originalStructure)
            this.setupIconMenu()
            this.setupOnTopMenuAction()
        }

        if (cta)
            this.querySelector('slot[name=call-to-action]').appendChild(cta)

        // demo mode : prevent every click
        //this.addEventListener('click', e => e.preventDefault())
        if (this.isSearchable)
            this.setupSearch()

        //this.setupFocusOut()
    }

    setupSearch() {
        /*const svgEl = this.querySelector('axa-icon')
            .renderRoot.querySelector('svg')*/
        const svgEl = this.querySelector('axa-icon[icon=search]')
        if (!svgEl) // retry a bit later, when the DOM of the button is really ready
            return setTimeout(this.setupSearch.bind(this), 100)

        // SVG given by axa-ch has a fixed width, we modify it on the fly
        // svgEl.setAttribute('height', '100%')
        // svgEl.setAttribute('width', '100%')

        svgEl.addEventListener('click', this.searchCallback.bind(this))
        /*svgEl.removeAttribute('height')
        svgEl.removeAttribute('width')
*/
    }

    setupIconMenu() {
        const header = this

        this.querySelector('axa-icon[icon=menu]').addEventListener('click', function (e) {
            // invert open state
            header.isOpened = !header.isOpened
            header.onOpenClose()
        }, true)

        this.querySelector('slot[name=structure]').addEventListener('pointerleave', () => {
            header.isOpened = false
            header.onOpenClose()
        })

    }

    onOpenClose() {
        let icon = this.querySelector('axa-icon[name=menu]')
        let structure = this.querySelector('slot[name=structure]')
        //let cta = this.querySelector('slot[name=call-to-action]')

        icon.setAttribute('aria-expanded', this.isOpened)
        icon.setAttribute('icon', this.isOpened ? 'close' : 'menu')
        if (structure)
            structure.classList[this.isOpened ? 'add' : 'remove']('expanded')
        if (icon)
            icon.classList[this.isOpened ? 'add' : 'remove']('expanded')

    }

    setupOnTopMenuAction() {
        let header = this
        this.querySelectorAll('slot[name=structure]>ul>li')
            .forEach(elSubMenu => elSubMenu.addEventListener('click', function (e) {
                //console.log(this)
                let elSubSubMenu = elSubMenu.querySelector('ul')
                // in there is no submenu, simply follow the link (if any)
                if (!elSubSubMenu)
                    return;

                elSubSubMenu.setAttribute('aria-expanded', true)
                elSubSubMenu.parentNode.setAttribute('aria-expanded', false)
                if (header.currentSubMenuEl)
                    header.currentSubMenuEl.setAttribute('aria-expanded', false)
                header.currentSubMenuEl = elSubSubMenu
            }, false))
    }

    searchCallback() {
        alert('Not implemented yet')
    }

})