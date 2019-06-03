import './index.scss'
import '../../atoms/logo'

customElements.define('axa-header-menu', class HeaderMenu extends HTMLElement {
    constructor() {
        super()
        //debugger
        let originalStructure = this.querySelector('ul')

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
                <slot name=structure /></slot>
                <slot name=call-to-action /></slot>
            </nav>
            `

        if (originalStructure)
            this.querySelector('slot[name=structure]').appendChild(originalStructure)

        if (cta)
            this.querySelector('slot[name=call-to-action]').appendChild(cta)

        // demo mode : prevent every click
        this.addEventListener('click', e => e.preventDefault())
    }

})