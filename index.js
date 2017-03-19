$( document ).ready(function) {
	$(".button-collapse").sideNav();
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#main').css('opacity') = '0.6'
    }
});