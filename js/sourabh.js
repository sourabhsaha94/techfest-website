/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$(document).ready(function(){
//    $("#main-wrapper").show();
//    $("#banner-wrapper").css({height:"100%",position: absolute,top: 0,right: 0,bottom: 0,left: 0});
//    
//    
//});
$(document).ready(function(){
$('.top-logo').hide();	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#arrow1').fadeIn();
                        
		} else {
			$('#arrow1').fadeOut();
		}
	});
        $(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.top-logo').fadeIn();
                        
		} else {
			$('.top-logo').fadeOut();
		}
	});
       
	
	//Click event to scroll to top
	$('#arrow1').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$('.top-logo').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top-80
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

