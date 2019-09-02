import { storiesOf, addDecorator } from '@storybook/html'

import imageWhite from './statics/home-hero-8.jpg'
import imageDark from './statics/landlord-hero-3.jpg'

import withCode from '../../dgAddons/colorationAddon'

const demo1 = `<axa-tabs>
<ul>
	<li aria-controls=text>See latest article</li>
	<li aria-controls=form>Register</li>
</ul>
</axa-tabs>

<axa-text-image id=text>
	<h2>Getting women entrepreneurs the funding they deserve</h2>
	<p>AXA has partnered with Impact Hub Milano to launch Angels for Women, an innovative network of female Business Angels joining their forces to support women-led and women-focused startups in Italy.</p>
	<img src=${imageWhite} />
</axa-text-image>

<form id=form onsubmit="alert('submited');return false;">

	<axa-input +label="Your full name" >
		<input type=text placeholder="Eg: Dr. Livingstone, Frank Enstein, ಅಭಿಷೇಕ್…" />
		<p slot=info>How should we name you?</p>
	</axa-input>
	<axa-input +label="Your gender">
		<select>
			<option>Not Provided</option>
			<option>Male</option>
			<option>Female</option>
		</select>
	</axa-input>

	<p>
		<axa-button>Submit</axa-button>
	</p>

</form>

<style>
@media (min-width: 37.5rem) {
axa-input {
	margin-right: 2rem;
}
}
form {
	padding: 1rem;
}
p {
	padding:0;
	margin:0;
}
</style>

`

storiesOf('Organism|Tabs with content', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Text and Form', () => demo1)
