$(document).ready(function() {
    $('.hide').hide();
    $('.learnmore').click(function(){
    	event.preventDefault();
    	$('#learnmoretext').slideDown();
    	$('.learnmore').hide();
  	});

    $('.readmore').click(function(){
    	event.preventDefault();
    	$('#show-this-on-click').slideDown();
    	$('.readmore').hide();
    	$('.readless').show();
    });

	$('.readless').click(function(){
    	event.preventDefault();
    	$('#show-this-on-click').slideUp();
    	$('.readmore').show();
    	$('.readless').hide();
    });    
  });
