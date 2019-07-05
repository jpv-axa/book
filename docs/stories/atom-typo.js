import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon';

/*
 * Typo
 */
import typoCss from '!raw-loader!../components/materials/typography.scss';

import '../components/atoms/typography'

const styles = `	<style>
#container *[class]:hover:after{
		content:" — "attr(fontSize)" — "attr(lineHeight)"";
}
</style>
`

const demo1 = `
<div id="container">
	<h1 class="a-typo__event-title" title=".a-typo__event-title">Event Title</h1>
	<h1 class="a-typo__page-title" title=".a-typo__page-title">Page Title - H1</h1>
	<h2 class="a-typo__slice-title" title=".a-typo__slice-title">Slice Title - H2</h2>
	<h3 class="a-typo__module-title" title=".a-typo__module-title">Module Title - H3</h3>
	<h4 class="a-typo__card-title" title=".a-typo__card-title">Card Title - H4</h4>
	<h5 class="a-typo__text-title" title=".a-typo__text-title">Text Title - H5</h5>
</div>
`
storiesOf(`Atoms|Typography`)
	//.addDecorator(withCode(typoCss, 'scss'))
	.addDecorator(withCode(demo1, 'html'))
	.addDecorator(code => code() + styles)
	.add('Titles', () => {
		setTimeout(() =>
			document.querySelectorAll('#container > *[class]').forEach(
				el => {
					el.setAttribute('fontSize', getComputedStyle(el)['fontSize'])
					el.setAttribute('lineHeight', getComputedStyle(el)['lineHeight'])
				}), 1000)
		return demo1
	})

const demo2 = `
<div id="container">
	<p><quote class="a-typo__highlight" title=".a-typo__highlight | .a-typo__quote">Highlight / Quote</quote></p>
	<p><label class="a-typo__label" title=".a-typo__label">Label</label></p>
	<p class="a-typo__text" title=".a-typo__text">Standard Text</span>
	<p><span class=a-typo__secondary-text title=.a-typo__secondary-text>Secondary Text</span> / <a class=a-typo__link title=.a-typo__link href=javascript:alert('clicked')>Link</a></p>
	<p>
		<span class=a-typo__button title=.a-typo__button>Button</span> / 
		<span class=a-typo__primary-link title=.a-typo__primary-link>Primary Link</span> / 
		<span class=a-typo__category title=.a-typo__category>Category Title / 
		<span class=a-typo__menu-item title=.a-typo__menu-item>Menu Item</span>
	</p>
	<p><span class="a-typo__legals" title=".a-typo__legals">Legals</span></p>
</div>
`
storiesOf(`Atoms|Typography`)
	.addDecorator(withCode(demo2, 'html'))
	.addDecorator(code => code() + styles)
	.add('Texts', () => {
		setTimeout(() =>
			document.querySelectorAll('#container *[class]').forEach(
				el => {
					el.setAttribute('fontSize', getComputedStyle(el)['fontSize'])
					el.setAttribute('lineHeight', getComputedStyle(el)['lineHeight'])
				}), 1000)
		return demo2
	})

const demo3 = `
<p class="a-typo__legals a-typo__relative-spacing-top__2" title=.a-typo__legals>Terms and conditions apply. Accident Forgiveness is a step back, so you won’t lose your full No Claims Discount if you have an accident. For customers with one or more years of No Claims Discount. Max 2 claims with full NCD.</p>
<p class="a-typo__link a-typo__relative-spacing-top__2" title=a-typo__link>BUTTON / PRIMARY LINK / CATEGORY TITLE / MENU ITEM</p>
<p class="a-typo__secondary-text a-typo__relative-spacing-top__2" title=.a_typo__secondary-text>Entdecken Sie die große Auswahl an attraktiven Preisvorteilen und Informationen rund um die Themen Gesundheit, Familie, Reisen, Auto, Datensicherheit und Recht. Darüber hinaus bieten wir Ihnen spezielle Informationen für Geschäftskunden und den öffentlichen Dienst. </p>
<p class="a-typo__text a-typo__relative-spacing-top__2" title=.a-typo__text>Sie genießen bereits den Schutz, auf den sich jeden Tag rund um die Uhr Millionen von Menschen in Deutschland verlassen können? Dann empfehlen Sie AXA im Freundeskreis ganz einfach per E-Mail, WhatsApp, Facebook oder Twitter. Damit sich auch Ihre Freunde schon bald auf den ausgezeichneten Versicherungsschutz von AXA verlassen können.</p>
<p> <label class="a-typo__label a-typo__relative-spacing-top__2" title=.a-typo__label>Alternative phone numbers</label><br>
<p> <quote class="a-typo__highlight a-typo__relative-spacing-top__2" title=.a-typo__highlight>Enjoy easy access to AXA's 24/7 emergency and claims helpline plus Accident Forgiveness as a part of your policy. With Accident Forgiveness you won’t lose your No Claims Discount just for having one accident.</quote>
<h5 class="a-typo__text-title a-typo__relative-spacing-top__2" title=.a-typo__text-title>Important Information: Please read before purchasing travel insurance</h5>
<h4 class="a-typo__card-title a-typo__relative-spacing-top__2" title=.a-typo__card-title>Änderungen an einem bestehenden Vertrag</h4>
<h3 class="a-typo__module-title a-typo__relative-spacing-top__2" title=.a-typo__module-title>Compare our features and benefits and buy the right car insurance policy for you.</h3>
<h2 class="a-typo__slice-title a-typo__relative-spacing-top__2" title=.a-typo__slice-title>Die Private Haftpflichtversicherung: Schutz schon ab 21,13€ im Jahr*</h2>
<h1 class="a-typo__page-title a-typo__relative-spacing-top__2" title=.a-typo__page-title>Die Private Haftpflichtversicherung: Schutz schon ab 21,13€ im Jahr*</h1>
<h1 class="a-typo__event-title a-typo__relative-spacing-top__2" title=.a-typo__event-title>Know You Can</h1>
`
storiesOf(`Atoms|Typography`)
	//.addDecorator(withCode(demo3, 'html'))
	.add('Long text demos', () => demo3)