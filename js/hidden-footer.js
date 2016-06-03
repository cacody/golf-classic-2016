// JavaScript Document
(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$("#footer2").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('#footer2').fadeIn();
			} else {
				$('#footer2').fadeOut();
			}
		});

	
	});

});
  }(jQuery));