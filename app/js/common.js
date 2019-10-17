$(function () {

	$('.how__list').slick({
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		adaptiveHeight: true
	});

	//scrolls
    $(".js_scroll").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 500);
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
	
	$(".toggler").on('click', function() {
		$(this).toggleClass('toggler--active');
		$(".menu").toggleClass('menu--active');
		$(".header").toggleClass('header--active');
	})
	



});
