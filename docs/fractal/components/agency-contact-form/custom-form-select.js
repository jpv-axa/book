function CustomSelect( el, datas ) {

	this.$el = el
	this.datas = datas

	// quick data validations
	if( !this.datas || !this.datas.options || !this.datas.placeholder ){
		throw "Invalid Format for custom select datas component"
	}

	if ( !Array.isArray( this.datas.options ) || !this.datas.options.length ) {
		throw "At least one data option is required for custom select datas component"
	}
	// / quick data validations

	this.init()

}

CustomSelect.prototype = {

	init: function() {
		// stored value
		this.$hiddenInput = this.$el.querySelector('input[type="hidden"]')
		this.$hiddenInput.value = ""

		// mechanism
		this.setupOptionsBox()
		this.setupButton()
		this.setupLabel()

		// datas hydrated
		this.createOptions()

	},

	setupOptionsBox: function() {
		this.optionsBoxOpened = false
		// will manage button and option box states
		this.$formContainer = this.$el.querySelector( '.form-custom-select' )
		this.$formContainer.classList.remove( 'opened' )

		this.$optionsBox = this.$el.querySelector( '.form-custom-select-options-box' )
	},

	setupButton: function() {
		this.$button = this.$el.querySelector( '.form-custom-select-button' )
		this.$button.classList.remove( 'selected' )
		this.$button.addEventListener( 'click', this.onToggle.bind(this) )
	},

	setupLabel: function() {
		// placeholder label or/and selected label
		this.$label = this.$el.querySelector( '.form-custom-select-button span' )
		this.$label.innerHTML = this.datas.placeholder
	},

	createOptions: function() {
		this.$optionsBox.innerHTML = ''
		this.$options = []

		for (var i = 0; i < this.datas.options.length; i++) {
			var data = this.datas.options[i]
			var option = document.createElement( 'div' )
			option.classList.add( 'form-custom-select-option' )
			if ( data.classname ) { option.className += " " + data.classname }

			var span = document.createElement( 'span' )
			if ( data.labelClassname ) { span.className += " " + data.labelClassname }
			span.innerHTML = data.label
			option.appendChild( span )
			this.$optionsBox.appendChild( option )

			// event handler
			this.$options.push( option )
			option.addEventListener( 'click', this.onSelectOption.bind(this, i), false )

		}
	},

	onToggle: function() {
		this.optionsBoxOpened = !this.optionsBoxOpened
		cl = this.$formContainer.classList
		this.optionsBoxOpened ? cl.add( 'opened' ) : cl.remove( 'opened' )
	},

	onSelectOption: function( pos, evt ) {
		this.onToggle()

		for (var i = 0; i < this.$options.length; i++) {
			this.$options[i].classList.remove( 'selected' )
		}
		this.$options[pos].classList.add( 'selected' )

		var data = this.datas.options[pos]
		this.updateWithSelectedValue( data )
	},

	updateWithSelectedValue: function( data ) {
		this.$label.innerHTML = data.label
		// change label state
		this.$button.classList.add( 'selected' )
		this.$hiddenInput.value = data.value
	},
	
	closeIfNeeded: function( evt ) {
		if( !this.$el.contains(evt.target) && this.optionsBoxOpened ) {
			this.onToggle()
		}
	}

}