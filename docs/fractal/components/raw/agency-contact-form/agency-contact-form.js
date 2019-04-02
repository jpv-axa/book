function AgencyContactCmpt() {
	this.init()

	this.setupTabs()
	this.setupTabsContents()

	// open first tab content
	this.openTabContent( 0 )
}

AgencyContactCmpt.prototype = {

	init: function() {
		this.tabs = []
		this.tabsContents = []
		this.activeTab = -1
	},

	// setup tabs
	setupTabs: function() {
		this.tabs = document.querySelectorAll( '.agency-contact-form-header-btn' )
		for (var i = 0; i < this.tabs.length; i++) {
			this.tabs[i].addEventListener( 'click', this.openTabContent.bind(this, i), false )
		}
	},

	setupTabsContents: function() {
		this.tabsContents = document.querySelectorAll( '.tab-content' )
		for (var i = 0; i < this.tabsContents.length; i++) {
			this.tabsContents[i].classList.remove( 'active' )
		}
	},

	openTabContent: function( pos, evt ) {
		if( this.activeTab == pos ) return
		this.activeTab = pos

		for (var i = 0; i < this.tabs.length; i++) {
			this.tabs[i].classList.remove( 'active' )
			this.tabsContents[i].classList.remove( 'active' )
		}
		this.tabs[pos].classList.add( 'active' )
		this.tabsContents[pos].classList.add( 'active' )
	},

}



window.addEventListener( 'DOMContentLoaded', function() {

	// form tabs
	var agencyContactCmpnt = new AgencyContactCmpt()

	// custom form selects
	var datas = {
		placeholder: 'Choose a query',
		options: [
			{ label: 'Ask for question 1', value: 'question-1', type: 'selectable', labelClassname: 'agent-cy-fs-16' },
			{ label: 'Ask for question 2', value: 'question-2', type: 'selectable', labelClassname: 'agent-cy-fs-16' }
		]
	}

	var instances = []
	var selects = document.querySelectorAll('.agency-contact-form-select')
	for (var i = 0; i < selects.length; i++) {
		instances.push( new CustomSelect( selects[i], datas ) )
	}

	// close all custom form selects instances
	document.addEventListener( 'click', function( evt ) {
		for (var i = 0; i < instances.length; i++) {
			instances[i].closeIfNeeded( evt )
		}
	}, false )

	// custom form radio
	var radios = document.querySelectorAll( '.agency-contact-form-radio' )
	for (var i = 0; i < radios.length; i++) {
		new CustomFormRadio( radios[i] )
	}

}, false)