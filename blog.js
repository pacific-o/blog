$(document).ready(function () {
	$(".toggle-arrow").click(function () {
		$(".header").slideToggle('slow');
		$(".main").toggleClass("main-full");
		$(".side-bar").toggleClass("side-shift");
		$(".toggle-arrow").toggleClass("arrow-shift");
		if ($('.main').hasClass('main-full')) {
			$(".toggle-arrow").css({
				"transform": "rotate(180deg)"
			});
		} else {
			$(".toggle-arrow").css({
				"transform": "rotate(0deg)"
			});
		};
	});

	$('.sub-header-items').click(function (event) {
		$(".active").removeClass("active");
		event.target.className = "sub-header-items active";
	})

});