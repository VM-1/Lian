// @prepros-prepend header.js
// @prepros-prepend jquery-3.5.1.min.js
// @prepros-prepend slick.min.js
// @prepros-prepend filter-popup.js
$(document).ready(function() {
	$('.home-slider').slick({
		dots: true,
		autoplay: true,
		easing: 'ease',
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}
		]
	});
});
headeritem(heaerListItems,'HOME');
// @prepros-prepend active-item.js