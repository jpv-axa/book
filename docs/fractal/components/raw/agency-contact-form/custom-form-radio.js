function CustomFormRadio( el ) {
	this.$el = el
	this.$el.addEventListener( 'click', this.onSelect.bind(this), false )
	this.$el.addEventListener( 'touchend', this.onSelect.bind(this), false )
}

CustomFormRadio.prototype = {
	onSelect: function() {
		var input = this.$el.querySelector( 'input[type="radio"]' )
		input.checked = true
	}
}