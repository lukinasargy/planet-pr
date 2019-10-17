$(function () {

	$('.sixth-list').slick({
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		adaptiveHeight: true
	});

	//scrolls
	$(".js_scroll").on("click", function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top + $('.main').scrollTop();
		$('.main').animate({
			scrollTop: top
		}, 1500);
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


	(function quantityProducts() {
		var $quantityArrowMinus = $(".header-minus");
		var $quantityArrowPlus = $(".header-plus");
		var $quantityNum = $(".header-number");

		$quantityArrowMinus.click(quantityMinus);
		$quantityArrowPlus.click(quantityPlus);

		function quantityMinus() {
			if ($quantityNum.val() > 1) {
				$quantityNum.val(+$quantityNum.val() - 1);
			}
		}

		function quantityPlus() {
			$quantityNum.val(+$quantityNum.val() + 1);
		}
	})();



});
