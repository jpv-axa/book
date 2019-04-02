function Tchat( el, datas ) {
	this.$el = document.querySelector( '#tchat' )
	this.$panel = document.querySelector( '.tchat-panel' )

	this.init()

	this.setupForm()
	this.setupOpenCloseButtons()
}

Tchat.prototype = {

	init: function() {
		this.windowOpened = false

		this.$messagesContainer = this.$el.querySelector( '.tchat-body-messages' )
		Ps.initialize( this.$messagesContainer )

		this.updateScrollbar()

		// attach or fix tchat on compact footer if exists
		this.$footerCompact = document.querySelector( '.footer-compact-cmpnt' )
		if( this.$footerCompact ) {
			this.footerAbsolutePosition = false
			this.onScrolling = this.onScrolling.bind(this)
			window.addEventListener('scroll', this.onScrolling, false)
		}

	},

	setupForm: function() {
		this.$form = this.$el.querySelector( '.tchat-body-answer-form' )
		this.$form.addEventListener( 'submit', this.onSendMessage.bind(this), false )

		this.$answerInput = this.$form.querySelector( 'input' )
	},

	onSendMessage: function( evt ) {
		if( evt ) evt.preventDefault()
		this.createMessage( { type: 'sender', text: this.$answerInput.value } )
		this.updateScrollbar()

		this.$answerInput.value = ''
	},

	createMessage: function( data ) {
		var cnt = document.createElement( 'div' )
		cnt.classList.add( 'tchat-message' )
		cnt.classList.add( data.type )

		var div1 = document.createElement( 'div' )
		div1.classList.add( 'tchat-message-content' )
		cnt.appendChild( div1 )

		var p1 = document.createElement( 'p' )
		p1.innerHTML = data.text
		div1.appendChild( p1 )

		this.$messagesContainer.appendChild( cnt )
	},

	updateScrollbar: function() {
		this.$messagesContainer.scrollTop = this.$messagesContainer.scrollHeight + 20
		Ps.update( this.$messagesContainer )
	},

	setupOpenCloseButtons: function() {
		this.$states = this.$el.querySelectorAll( '.tchat-footer-state' )
		this.$buttonPanel = this.$el.querySelector( '.tchat-footer-btn' )
		this.$buttonPanel.addEventListener( 'click', this.onToggleWindow.bind(this), false )
	},

	onToggleWindow: function( evt ) {
		if( evt ) evt.preventDefault()
		this.windowOpened ? this.close() : this.open()
	},

	open: function() {
		this.windowOpened = true
		this.$states[0].classList.add( 'hidden' )
		this.$states[1].classList.remove( 'hidden' )
		this.$el.classList.add( 'opened' )

		this.updateScrollbar()
	},

	close: function() {
		this.windowOpened = false
		this.$states[0].classList.remove( 'hidden' )
		this.$states[1].classList.add( 'hidden' )
		this.$el.classList.remove( 'opened' )
	},

	onScrolling: function() {
		// ie11 compatibility
		var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
		
		var value = (scrollTop + window.innerHeight - this.$footerCompact.offsetTop) / this.$footerCompact.offsetHeight
		var clampedValue = Math.max(0, Math.min( value, 1))
		var y = clampedValue * this.$footerCompact.offsetHeight * -1
		this.$el.style.setProperty( 'transform', 'translateY( ' + y + 'px )' )
		
		
		if( scrollTop + window.innerHeight > this.$footerCompact.offsetTop ) {
			if( this.footerAbsolutePosition ) {
				this.footerAbsolutePosition = false
				this.$el.classList.add( 'tchat-footer-absolute' )
			}
		} else {
			if( !this.footerAbsolutePosition ) {
				this.footerAbsolutePosition = true
				this.$el.classList.remove( 'tchat-footer-absolute' )
			}
		}
	}

}



window.addEventListener( 'DOMContentLoaded', function() {
	var tchat = new Tchat()
}, false)