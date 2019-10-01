import { storiesOf } from '@storybook/html'

import withCode from '../../dgAddons/colorationAddon'

import imageWhite from './statics/home-hero-8.jpg'
import imageDark from './statics/landlord-hero-3.jpg'

import '../components/molecules/editorial'

const responsiveImage = `
<picture>
	<source media="(max-width: 64rem)" srcset="${imageDark}">
	<source media="(min-width: 64rem)" srcset="${imageWhite}">
	<img src=${imageDark} />
</picture>
`
const styles = `<style>
	axa-text-image, .m-multiple-entries, .m-quote--catchy, m-quote--explainer {
		border: 1px solid green;
	}
	code {
		background-color: transparent;
	}
</style>`

const standardImage = `	<img src=${imageWhite} />`

const demo1 = `
<axa-text-image>
	<h2>The title must be inside an Hx tag.</h2>
	<p>Anything inside a <code>P</code> tag will be considered as the content and placed here. For the companion image, please provide an <code>IMG</code> or <code>PICTURE</code> tag. Anything else will be <b>ignored</b>.</p>
	${standardImage}
</axa-text-image>

<axa-text-image +imgPosition=before>
	<h2>Design variation : "Before".</h2>
	<p>Use the attribute <code>+imgPosition=before</code> to have the other variant design. In vertical design (mostly mobile), the image comes on top of the textual content. In horizontal design (mostly desktop), the image is placed on the left.</p>
	${standardImage}
</axa-text-image>

<axa-text-image>
	<h2>Responsive images compatible!</h2>
	<p>We recommend sending light and vertical images to mobiles and high quality horizontal images on desktop. You can use <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture><code>picture</code></a> to declare your image sources.</p>
	${responsiveImage}
</axa-text-image>

<axa-text-image>
	<h2>Very large amount of content and a title that can take up to three lines.</h2>
	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
	${standardImage}
</axa-text-image>

<axa-text-image +imgPosition=before>
	<h2>Very large amount of content, with "before" variant.</h2>
	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
	${standardImage}
</axa-text-image>
`

storiesOf('Molecules|Editorial', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Text and Image', () => demo1 + styles)

const content = [
	{ icon: 'credit_card', title: 'Bank', subTitle: 'Up to 10% off!' },
	{ icon: 'car', title: 'Car', subTitle: 'Up to 10% off!' },
	{ icon: 'flight', title: 'Travel', subTitle: 'Up to 10% off!' },
	{ icon: 'health', title: 'Health', subTitle: 'Caption offer on multi-line' },
	{ icon: 'house', title: 'Housing', subTitle: 'Up to 10% off!' },
	{ icon: 'more_horiz', title: 'All our offers', subTitle: '' }
]

function makeEntriesWithClasses(content) {
	return content.reduce(
		(finalHTML, value) =>
			(finalHTML += `<li class=m-multiple-entries__entry>
	<a href=#>
		<axa-icon icon=${value.icon}></axa-icon>
		<h4 class=m-multiple-entries__entry__label>${value.title}</h4>
		<span class=m-multiple-entries__entry__text>${value.subTitle}</span>
	</a>
	</li>`),
		''
	)
}

function makeEntriesWithMarkup(content) {
	return content.reduce(
		(finalHTML, value) =>
			(finalHTML += `<li>
	<a href=#>
		<axa-icon icon=${value.icon}></axa-icon>
		<h4>${value.title}</h4>
		<span>${value.subTitle}</span>
	</a>
	</li>`),
		''
	)
}

const demo2 = `
<p class=a-typo__text>You can directly apply classes to your original markup, because there is no added behaviour added by the tag. Look for the <code>m-multiple-entries__*</code> classes.</p>
<div class="m-multiple-entries m-multiple-entries--bow">
	<h3 class=m-multiple-entries__title>Find your Product!</h3>
	<ul class=m-multiple-entries__entries>
	${makeEntriesWithClasses(content)}
	</ul>
</div>

<p class=a-typo__text>You can use the <code>axa-multiple-entries</code> tag, surrounding an <code>Hx</code> and <code>UL/LI</code> tags.</p>

<axa-multiple-entries>
<h2>Find your Insurance!</h2>
<ul>
${makeEntriesWithMarkup(content)}
</ul>
</axa-multiple-entries>
`

storiesOf('Molecules|Editorial', module)
	.addDecorator(withCode(demo2 + styles, 'html'))
	.add('Multiple Entries, White Background', () => demo2 + styles)

const demo3 = `
<p class=a-typo__text>You can directly apply classes to your original markup, because there is no added behaviour added by the tag. Look for the <code>m-multiple-entries__*</code> classes.</p>
<div class="m-multiple-entries m-multiple-entries--wob">
	<h3 class=m-multiple-entries__title>Find your Product!</h3>
	<ul class=m-multiple-entries__entries>
	${makeEntriesWithClasses(content)}
	</ul>
</div>

<p class=a-typo__text>You can use the <code>axa-multiple-entries</code> tag, surrounding an <code>Hx</code> and <code>UL/LI</code> tags.</p>

<axa-multiple-entries class=m-multiple-entries--wob>
<h2>Find your Insurance!</h2>
<ul>
${makeEntriesWithMarkup(content)}
</ul>
</axa-multiple-entries>
`

storiesOf('Molecules|Editorial', module)
	.addDecorator(withCode(demo3 + styles, 'html'))
	.add('Multiple Entries, Blue Background', () => demo3 + styles)

const demo4 = `
<p class=a-typo__text>Change the look of the icons by adding the <code>m-multiple-entries--circle</code> class.</p>
<div class="m-multiple-entries m-multiple-entries--circle">
	<h3 class=m-multiple-entries__title>Find your Product!</h3>
	<ul class=m-multiple-entries__entries>
	${makeEntriesWithClasses(content)}
	</ul>
</div>

<p class=a-typo__text>Blue background with <code>m-multiple-entries--wob</code>, icons in circle with <code>m-multiple-entries--circle</code>.</p>

<axa-multiple-entries class="m-multiple-entries--wob m-multiple-entries--circle">
<h2>Find your Insurance!</h2>
<ul>
${makeEntriesWithMarkup(content)}
</ul>
</axa-multiple-entries>
`

storiesOf('Molecules|Editorial', module)
	.addDecorator(withCode(demo4 + styles, 'html'))
	.add('Multiple Entries, Icons in Circles', () => demo4 + styles)

const demo5 = `

<div class="m-quote--explainer">
	<h3 class=m-quote__title>Use the class "m-quote--explainer" on the container.</h3>
	<div class=m-quote__paragraph>Use <code>m-quote__title</code> and <code>m-quote__paragraph</code> for the content. The button MUST have the class <code>a-button--secondary</code></div>
	<axa-button class=a-button--secondary>axa-button tag, secondary design</axa-button>
</div>

<div class="m-quote--catchy">
	<h3 class=m-quote__title>Use the m-quote--catchy for single CTA!</h3>
	<axa-button class=a-button--secondary>axa-button tag, secondary design</axa-button>
</div>

<div class="m-quote--explainer m-quote--blue">
	<h3 class=m-quote__title>Design variant, with ocean blue background.</h3>
	<p class=m-quote__paragraph>On the container, you can use the  <code>m-quote--blue</code> class for this blue background, or lock the <code>m-quote--white</code>, for the default white background. Please note that the button MUST have the class <code>a-button--secondary--white</code></p>
	<axa-button class=a-button--secondary--white>axa-button tag, secondary white design</axa-button>
</div>

<div class="m-quote--catchy m-quote--blue">
	<h3 class=m-quote__title>Use m-quote--blue and m-quote--catchy!</h3>
	<axa-button class=a-button--secondary--white>axa-button tag, secondary white design</axa-button>
</div>

`

storiesOf('Molecules|Editorial', module)
	.addDecorator(withCode(demo5 + styles, 'html'))
	.add('Quote', () => demo5 + styles)
