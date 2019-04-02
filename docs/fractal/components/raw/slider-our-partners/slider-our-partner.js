document.addEventListener( 'DOMContentLoaded', function() {
	
	// https://github.com/nolimits4web/Swiper/blob/master/demos/33-responsive-breakpoints.html
	var swiper = new Swiper( '.swiper-slider-our-partners', {
		pagination: '.swiper-slider-our-partners-pagination',
		loop: true,
		paginationClickable: true,
		slidesPerView: 3,
		spaceBetween: 60,
		nextButton: '.swiper-slider-our-partners-nav-next',
		prevButton: '.swiper-slider-our-partners-nav-prev',
		// responsive breakpoints
		breakpoints: {
			// when window width is <= 992px
			991: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			// when window width is <= 1200px
			1199: {
				slidesPerView: 3,
				spaceBetween: 20,
			}
		},
	})

})