import {
	storiesOf
} from '@storybook/html'

import withCode from '../../dgAddons/colorationAddon';

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

<style>
	axa-text-image {
		border: 1px solid green;
	}
</style>
`

storiesOf('Molecules|Editorial', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Text and Image', () => demo1)