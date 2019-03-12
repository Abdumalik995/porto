$(document).ready(function() {


	$('#bars').click(function() {

        $('html, body').animate({scrollTop:500}, 500);
        $('header').css('position','sticky');
      
	});
})