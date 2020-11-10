jQuery(document).ready(function($) {
	$('.profile__sliderbig').slick({
		arrows:false,
		dots:false,
		centerMode:false,
		fade:false,
		asNavFor: '.profile__slider',
		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
				dots:true,	        
		      }
		    },
		 ]
	});

	$('.profile__slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
		centerMode:true,
		asNavFor: '.profile__sliderbig',		
  		focusOnSelect: true,
  		responsive: [
		    {
		      breakpoint: 991,
		      settings: "unslick"
		    },
		]
	});
	
});