$(document).ready(function() {


	$('#bars').click(function() {

        $('html, body').animate({scrollTop:500}, 500);
        $('header').css('position','sticky');
      
	});
	$('#sub').click(function(e) {
		e.preventDefault();
	});
	$('#hisob').click(function() {
		$('#calc').slideToggle().toggleClass('open');
		console.log('heyy');
	});
})