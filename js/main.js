$(document).ready(function(){
	// menu click event
	$('.menuBtn').click(function() {
		$(this).toggleClass('act');
		$('.mainMenu, .mainContainer').toggleClass('act');
	});

	$('.mainMenu li').click(function() {
		$('.mainMenu li').removeClass('act');
		$(this).addClass('act');
		$('.menuBtn').removeClass('act');
		$('.mainMenu, .mainContainer').removeClass('act');
	});
});