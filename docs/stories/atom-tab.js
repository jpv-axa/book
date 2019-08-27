import { storiesOf, addDecorator } from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

import '../components/atoms/tabs'

const styles = `
<style>

</style>
`

const content = `
<div id=content1 style=background-color:red>
	<p>First piece of content, with <code>id=content1</code></p>
	<p>Some notes to implementors :
	<ul>
		<li>Do not hide by default the content, we'll take care of this, and the rest of accessibility too.</li>
		<li><code>ul > li[aria-controls]</code> with a value corresponding to the content zone ID is the only markup you need to write.</li>
		<li>We do enforce the guidelines policy : number of tabs between 2 and 8.</li>
		<li>If IDs are missing we do not block the user but you will have warnings in the console.</li>
		<li>The user can navigate with his keyboard arrows.</li>
		<li>You can disable tabs individually with the <code>+disabled</code> attribute.</li>
		<li>You can pre-select a tab with the attribute <code>aria-selected=true</code> on the <code>LI</code> tag</li>
		<li>There is an event published at the component level that gives you the selected tab<pre>
		document.querySelector('axa-tabs').addEventListener('selected', e => {
			console.log(e.detail.contentID)
		})</pre></li>

	</ul>
</div>
<div id=content2 style=background-color:orange>
	<p>Content with <code>id=content2</code></p>
</div>
<div id=content3 style=background-color:green>
	<p>Content with <code>id=content3</code></p>
</div>
`

const demo1 = `

<axa-tabs title="3 simple tabs">
	<ul>
		<li aria-controls=content1>Tab One</li>
		<li aria-controls=content2>Tab with a long text</li>
		<li aria-controls=content3>Tab 3</li>
	</ul>
</axa-tabs>

<axa-tabs title="3 tabs with icon">
	<ul>
		<li aria-controls=content1 +icon=youtube >Tab One</li>
		<li aria-controls=content2 +icon=menu >Tab with a long text</li>
		<li aria-controls=content3 +icon=eye >Tab 3</li>
	</ul>
</axa-tabs>

`
storiesOf(`Atoms|Tabs`, module)
	.addDecorator(withCode(demo1 + content, 'html'))
	.add('Normal use cases', () => demo1 + content + styles)

const demo2 = `
<axa-tabs title="Empty tab">

</axa-tabs>

<axa-tabs title="Pre-selected tab">
<ul>
	<li aria-controls=content1>Tab One</li>
	<li aria-controls=content2 +disabled>Disabled tab</li>
	<li aria-controls=content3 aria-selected=true>Pre-selected Tab</li>
</ul>
</axa-tabs>

<axa-tabs title="One tab only">
	<ul>
		<li aria-controls=content1>Only One tab</li>
	</ul>
</axa-tabs>

<axa-tabs title="Maximum number of tabs">
	<ul>
		<li aria-controls=content1>Tab One</li>
		<li aria-controls=content2>Tab with a long text</li>
		<li aria-controls=content3>Tab 3</li>
		<li aria-controls=content1>Back to Tab 1</li>
		<li aria-controls=content2>Again tab 2</li>
		<li aria-controls=contentXXX>Tab referencing inexisting content</li>
		<li aria-controls=content1>Tab One</li>
		<li aria-controls=content2>Finally : tab 2</li>
		<li aria-controls=content3>This tab should not appear</li>
		<li aria-controls=content3 id=other-id>This tab should not appear</li>
	</ul>
</axa-tabs>
`

storiesOf(`Atoms|Tabs`, module)
	.addDecorator(withCode(demo2 + content, 'html'))
	.add('Edge use cases', () => demo2 + content + styles)
