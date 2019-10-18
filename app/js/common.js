$(function () {

	$('.how__list').slick({
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: true,
					dotsClass: 'custom_paging',
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 8000,
					adaptiveHeight: true,
					customPaging: function (slider, i) {
						return (i + 1) + '/' + '<span class="custom_paging-count">' + slider.slideCount + '</span>';
					},
				}
			},
			{
				breakpoint: 5000,
				settings: 'unslick'
			}
		]
	});

	//scrolls
	$(".js_scroll").on("click", function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});


	//animations

	$(document).ready(function () {
		$('.first').addClass('visible');
		$('.main').on('focus load resize scroll', function () {

			//            $('.header-text').html('scrolltop+innerHeight=' + Math.round($('.main').scrollTop() + $(window).innerHeight()) + 'scrolltop= ' + Math.round($('.main').scrollTop()));
			$('.animated').each(function () {
				var elementTop = $(this).position().top + $('.main').scrollTop();
				var elementBot = $(this).position().top + $('.main').scrollTop() + $(this).height();
				var windowTop = $('.main').scrollTop();
				var windowBot = $('.main').scrollTop() + $(window).innerHeight();

				if (((elementTop + $(this).height() * 0.7) <= windowBot) && (elementBot > windowTop)) {
					$(this).addClass('visible');
				} else if ((elementTop > windowBot) || (elementBot < windowTop)) {
					$(this).removeClass('visible');
				}
			});
		});
	});

	$(".toggler").on('click', function () {
		$(this).toggleClass('toggler--active');
		$(".menu").toggleClass('menu--active');
		$(".header").toggleClass('header--active');
	});
	$('.faq__subtitle').on('click', function () {

		$(this).toggleClass('faq__subtitle--active');
		$(this).parent().toggleClass('faq__item--active').children('.faq__text').slideToggle(500)
;


	});






});
