import {
	storiesOf
} from '@storybook/html'

import withCode from '../../dgAddons/colorationAddon';

import '../components/molecules/footer'

// dummy catchup function
window.onNavigate = function () {
	return alert('Click')
}

const contentCol1Short = `
	<ul title="AXA and you">
		<li><a href=javascript:onNavigate()>Jargon explained</a></li>
		<li><a href=javascript:onNavigate()>Sitemap</a></li>
		<li><a href=javascript:onNavigate()>Manage your policy</a></li>
	</ul>
`
const contentCol1Long = `
	<ul title="Useful Links">
		<li><a href=javascript:onNavigate()>Jargon explained</a></li>
		<li><a href=javascript:onNavigate()>Sitemap</a></li>
		<li><a href=javascript:onNavigate()>Manage your policy</a></li>
		<li><a href=javascript:onNavigate()>Contact Us</a></li>
		<li><a href=javascript:onNavigate()>FAQ</a></li>
		<li><a href=javascript:onNavigate()>Claim</a></li>
		<li><a href=javascript:onNavigate()>PDPA</a></li>
		<li><a href=javascript:onNavigate()>Panel Workshop</a></li>
		<li><a href=javascript:onNavigate()>Travel Insurance</a></li>
	</ul>
`

const contentCol2 = `
	<ul title="Beliebte Versicherungen">
    <li><a href=javascript:onNavigate()>Kontakt Privatkunden</a></li>
    <li><a href=javascript:onNavigate()>Ansprechpartner vor Ort</a></li>
    <li><a href=javascript:onNavigate()>Online Banking</a></li>
    <li><a href=javascript:onNavigate()>Service Apps</a></li>
    <li><a href=javascript:onNavigate()>Servicenummern</a></li>
    <li><a href=javascript:onNavigate()>Adressen</a></li>
    <li><a href=javascript:onNavigate()>Freunde werben</a></li>
	</ul>
`

const contentCol3Long = `
<ul title="勧誘方針">
	<li><a href=javascript:onNavigate()>取引時確認について</a></li>
	<li><a href=javascript:onNavigate()>個人情報の取り扱い
	<li><a href=javascript:onNavigate()>利益相反管理方針の概要
	<li><a href=javascript:onNavigate()>反社会的勢力対応の基本方針
	<li><a href=javascript:onNavigate()>人権に関する基本方針
	<li><a href=javascript:onNavigate()>お客さま本位の業務運営を実現するための基本方針
	<li><a href=javascript:onNavigate()>日本版スチュワードシップ・コードの受け入れ
	<li><a href=javascript:onNavigate()>AXAグループデータプライバシー宣言
	<li><a href=javascript:onNavigate()>生命保険相談所(裁定審査会)について
	<li><a href=javascript:onNavigate()>生命保険契約者保護機構について
	<li><a href=javascript:onNavigate()>サイトポリシー
</ul>
`

// unused now, see you next sprint
const contentSocialLinks = `
	<ul title="Follow AXA">
		<li><a href=javascript:onNavigate()>Facebook</a></li>
		<li><a href=javascript:onNavigate()>LinkedIn</a></li>
		<li><a href=javascript:onNavigate()>Twitter</a></li>
		<li><a href=javascript:onNavigate()>Instagram</a></li>
		<li><a href=javascript:onNavigate()>Youtube</a></li>
	</ul>
`

const demo1 = '<axa-footer></axa-footer>'
storiesOf('Molecules|Footer', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Empty footer', () => demo1)


const demo2 = `<axa-footer>
	<span slot=legal>
		<a href="https://www.axa.com/en/about-us/Legal-Information" >Legal information and terms of use</a>
		<br /> © 2019 AXA All Rights Reserved
	</span>
</axa-footer>`
storiesOf('Molecules|Footer', module)
	.addDecorator(withCode(demo2, 'html'))
	.add('Custom copyright', () => demo2)



const demo3 = `<axa-footer>
	${contentCol1Short}
</axa-footer>
`
storiesOf('Molecules|Footer', module)
	.addDecorator(withCode(demo3, 'html'))
	.add('1 Column', () => demo3)



const demo4 = `<axa-footer>
	${contentCol1Short}
	${contentCol2}
	${contentCol3Long}
</axa-footer>
`
storiesOf('Molecules|Footer', module)
	.addDecorator(withCode(demo4, 'html'))
	.add('3 Columns', () => demo4)



const demo5 = `<axa-footer>
	${contentCol1Long}
	${contentCol2}
	${contentCol3Long}
	<span slot=legal>© AXA Konzern AG, Köln.<br />Alle Rechte vorbehalten.</span>
</axa-footer>
`
storiesOf('Molecules|Footer', module)
	.addDecorator(withCode(demo5, 'html'))
	.add('3 Columns and custom copyright', () => demo5)