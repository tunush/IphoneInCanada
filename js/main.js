$('.humburger-mobile').on('click', function(){
	if ($('.navbar-collapse.mobile').hasClass('show')) {
		$('.navbar-collapse.mobile').removeClass("show");
		$('.navbar-collapse.mobile').css('display', 'none');
	} else {
		$('.navbar-collapse.mobile').addClass('show');
		$('.navbar-collapse.mobile').css('display', 'block');
	}
});