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
                    el.classList.add('a-typo__menu-item') // top menu texts
                    el.setAttribute('textContent', el.querySelector('a').textContent)
                    if (el.querySelector('li')) {
                        el.setAttribute('aria-haspopup', true) // A11Y : auto-add aria attributes
                        el.querySelectorAll('li') // sub menus are regular links
                            .forEach(subEl => subEl.classList.add('a-typo__link'))

                    }
                });


        }

        this.innerHTML = `
            <nav class=m-header>
                <axa-logo></axa-logo>
                <slot name=structure /></slot>
                <slot name=call-to-action /></slot>
            </nav>
            `

        if (originalStructure)
            this.querySelector('slot[name=structure]').appendChild(originalStructure)

        let cta = this.querySelector('[slot=call-to-action]')
        if (cta)
            this.querySelector('slot[name=call-to-action]').appendChild(cta)

        // demo mode : prevent every click
        this.addEventListener('click', e => e.preventDefault())
    }

})