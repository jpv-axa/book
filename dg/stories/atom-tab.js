import { storiesOf, addDecorator } from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

import '../components/atoms/tabs'

const styles = `
<style>
.a-tabcontainer {
	border: 1px solid green;
}
div p:first-child {
	margin-top:0;
}
div p:last-child {
	margin-bottom:0;
}
</style>
`

const content_1 = `
<div id=content1>
	<p class=a-typo__text>First piece of content, with <code>id=content1</code></p>
	<p class=a-typo__text>Some notes to implementors :
	<ul class=a-typo__text>
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
<div id=content2>
	<p class=a-typo__text>Content with <code>id=content2</code></p>
</div>
<div id=content3>
	<p class=a-typo__text>Content with <code>id=content3</code></p>
</div>
`

const demo1_1 = `
<axa-tabs title="3 simple tabs">
	<ul>
		<li aria-controls=content1>Tab One</li>
		<li aria-controls=content2>Tab with a long text</li>
		<li aria-controls=content3>Tab 3</li>
	</ul>
</axa-tabs>
`
const content_2 = `
<div id=content4>
	<p class=a-typo__text>Content with <code>id=content4</code></p>
</div>
<div id=content5>
	<p class=a-typo__text>Content with <code>id=content5</code></p>
</div>
<div id=content6>
	<p class=a-typo__text>Content with <code>id=content6</code></p>
</div>
`

const demo1_2 = `
<axa-tabs title="3 tabs with icon">
	<ul>
		<li aria-controls=content4 +icon=search >Tab One</li>
		<li aria-controls=content5 +icon=menu >Tab with a long text</li>
		<li aria-controls=content6 +icon=eye >Tab 3</li>
	</ul>
</axa-tabs>
`

storiesOf(`Atoms|Tabs`, module)
	.addDecorator(withCode(demo1_1 + content_1 + demo1_2 + content_2, 'html'))
	.add(
		'Normal use cases',
		() => demo1_1 + content_1 + demo1_2 + content_2 + styles
	)

const demo2_1 = `
<axa-tabs title="Empty tab (throws an error)">

</axa-tabs>

<axa-tabs title="Pre-selected or disabled tab">
<ul>
	<li aria-controls=content1>Tab One</li>
	<li aria-controls=content2 +disabled>Disabled tab</li>
	<li aria-controls=content3 aria-selected=true>Pre-selected Tab</li>
</ul>
</axa-tabs>
`

const demo2_2 = `
<axa-tabs title="Maximum number of tabs">
	<ul>
		<li aria-controls=content4>Tab One</li>
		<li aria-controls=content5>Tab with a long text</li>
		<li aria-controls=content6>Tab 3</li>
		<li aria-controls=content4>Back to Tab 1</li>
		<li aria-controls=content5>Again tab 2</li>
		<li aria-controls=contentXXX>Tab referencing inexisting content</li>
		<li aria-controls=content4>Tab One</li>
		<li aria-controls=content5>Finally : tab 2</li>
		<li aria-controls=content6>This tab should not appear</li>
		<li aria-controls=content6 id=other-id>This tab should not appear</li>
	</ul>
</axa-tabs>
`

const demo3_1 = `
<axa-tabs title="Modify container spacings">
	<ul>
		<li aria-controls=show-container-spacing-1>Default spacing</li>
		<li aria-controls=show-container-spacing-2>No spacing</li>
		<li aria-controls=show-container-spacing-3>Vertical only</li>
		<li aria-controls=show-container-spacing-4>Horizontal only</li>
	</ul>
</axa-tabs>

<div id=show-container-spacing-1>
	<p class=a-typo__text>
	By default, padding is added on your container, via the <code>a-tabcontainer</code> class.
	You can remove this behaviour by setting yourself a <code>a-tabcontainer--space-VARIANT</code> class, see next tabs.
	</p>
</div>
<div class=a-tabcontainer--space-none" id=show-container-spacing-2>
	<p class=a-typo__text>
	No padding at all when setting <code>class=a-tabcontainer--space-none</code> on your container.
	<br />Useful if you put other axa-* components.
	</p>
</div>
<div class=a-tabcontainer--space-vertical id=show-container-spacing-3>
	<p class=a-typo__text>
	Only vertical padding when setting <code>class=a-tabcontainer--space-vertical</code> on your container.
	</p>
</div>
<div class=a-tabcontainer--space-horizontal id=show-container-spacing-4>
	<p class=a-typo__text>
	Only horizontal padding when setting <code>class=a-tabcontainer--space-horizontal</code> on your container.
	</p>
</div>
`

storiesOf(`Atoms|Tabs`, module)
	.addDecorator(
		withCode(demo2_1 + demo2_2 + content_1 + content_2 + demo3_1, 'html')
	)
	.add(
		'Edge use cases',
		() => demo2_1 + content_1 + demo2_2 + content_2 + demo3_1 + styles
	)
