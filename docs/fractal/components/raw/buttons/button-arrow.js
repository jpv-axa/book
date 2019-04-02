function ButtonArrow( el ) {
	this.$el = el
	this.init()
}

ButtonArrow.prototype = {
	init: function () {
		this.isArrowAnimated = this.$el.classList.contains( 'arrow-animated' )
		if( this.isArrowAnimated ) {

			this.duplicateArrow()

			this.$el.addEventListener( 'mouseenter', this.onEnter.bind(this), false)
			this.$el.addEventListener( 'mouseleave', this.onLeave.bind(this), false)
			
			this.$el.addEventListener( 'touchstart', this.onEnter.bind(this), false)
			this.$el.addEventListener( 'touchend', this.onEnter.bind(this), false)
			
		}
	},
	onEnter: function() {
		TweenMax.set( this.svgs[0], {x: 0, opacity: 1} )
		TweenMax.set( this.svgs[1], {x: -15, opacity: 0} )
		
		TweenMax.to( this.svgs[0], 0.3, { x: 15, opacity: 0 }  )
		TweenMax.to( this.svgs[1], 0.3, {x: 0, opacity: 1 }  )
	},
	onLeave: function() {
		TweenMax.set( this.svgs[0], {x: -15, opacity: 0} )
		TweenMax.set( this.svgs[1], {x: 0, opacity: 1} )

		TweenMax.to( this.svgs[0], 0.3, {x: 0, opacity: 1 }  )
		TweenMax.to( this.svgs[1], 0.3, { x: 15, opacity: 0 }  )
	},
	duplicateArrow: function() {
		var svg = this.$el.querySelector( 'svg' )
		var dsvg = svg.cloneNode( true )
		this.$el.querySelector( '.icon' ).appendChild( dsvg )
		this.svgs = this.$el.querySelectorAll( 'svg' )
	}
}

window.addEventListener( 'DOMContentLoaded', function() {

	var arrowButtons = document.querySelectorAll( '.button.arrow' )
	for (var i = 0; i < arrowButtons.length; i++) {
		new ButtonArrow( arrowButtons[i] )
	}

}, false )