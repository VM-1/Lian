// @prepros-prepend header.js
// @prepros-prepend jquery-3.5.1.min.js
// @prepros-prepend slick.min.js
$(document).ready(function() {
	$('.details-slider-big').slick({
		easing: 'ease',
		asNavFor: '.details-slider-small',
		touchTreshhold: 10,
		appendArrows: $('.details-slide-arrows'),
	});
	$('.details-slider-small').slick({
		easing: 'ease',
		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: false,
		asNavFor: '.details-slider-big',
		touchTreshhold: 10,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
});
let detailsSocialsList = document.querySelector('.details-socials-list');
document.querySelector('.details-socials-share').style.height = detailsSocialsList.offsetHeight + 'px';