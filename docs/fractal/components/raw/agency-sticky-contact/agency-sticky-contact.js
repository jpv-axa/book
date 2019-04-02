function AgentStickyContact( cnt ) {
	this.$el = document.querySelector( '.agency-sticky-contact-cmpnt' )
	this.$cnt = cnt
	this.init()
}

AgentStickyContact.prototype = {

	init: function() {
		this.fixed = false
		this.onScrolling = this.onScrolling.bind(this)
	},

	activate: function() {
		this.$el.classList.add( 'sticky-activated' )
		window.addEventListener('scroll', this.onScrolling, false)
	},

	deactivate: function() {
		this.$el.classList.remove( 'sticky-activated' )
		window.removeEventListener('scroll', this.onScrolling, false)
	},

	onScrolling: function() {
		// ie11 compatibility
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
		this.scroll( scrollTop )
	},

	scroll: function( scrollTop ) {
		if( scrollTop > this.$cnt.offsetTop ) {
			if( !this.fixed ) {
				this.fixed = true
				this.$el.classList.add( 'sticky-fixed' )
			}
		} else {
			if( this.fixed ) {
				this.fixed = false
				this.$el.classList.remove( 'sticky-fixed' )
			}
		}
	}

}