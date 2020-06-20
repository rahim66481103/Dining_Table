 /* Animate Nav Bar section */
 $(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		var $navbar = $('.Header_Container');
		
		if (positiontop > 165)
		{
			$navbar.addClass('Header_Container_animated');
		}	else
		{
			$navbar.removeClass('Header_Container_animated');
		}
	})
 
 })
 /* End Nav Bar section */

 /* Animate about us first section */
 $(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		var $About_us_Container_p = $('.About_us_Container_p');
		var $Cheffcartoon = $('.Cheffcartoon');
		
		if (positiontop > 280)
		{
			$About_us_Container_p.addClass('animate__animated animate__fadeInUp');
			$Cheffcartoon.addClass('animate__animated animate__fadeInUp');
		}	else if(positiontop < 280)
		{
			$About_us_Container_p.removeClass('animate__animated animate__fadeInUp');
			$Cheffcartoon.removeClass('animate__animated animate__fadeInUp');
			
		}
	})
 
 })

/* END of animate about us section */


/* animate restaurant details section */
$(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		var $A_Rest_Details = $('.A_Rest_Details')
		
		if(positiontop > 850){
			$A_Rest_Details.addClass('animate__animated animate__fadeInUp');
		}else if (positiontop < 1950){
			$A_Rest_Details.removeClass('animate__animated animate__fadeInUp');
		}
	})
 
 })
 /* End of animate restaurant details section */
 
 /* animate parking details section */
 
 $(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		 var $A_Park_Details = $('.A_Park_Details')
		
		if(positiontop > 1569){
			$A_Park_Details.addClass('animate__animated animate__fadeInUp');
		}else if (positiontop < 2514){
			$A_Park_Details.removeClass('animate__animated animate__fadeInUp');
		} 
	})
 
 })
 /* End of animate restaurant details section */
 
 /* animate Dine details section */
 $(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		var $Dine_Details = $('.Dine_Details')
		
		if(positiontop > 2093){
			$Dine_Details.addClass('animate__animated animate__fadeInUp');
		}else if (positiontop < 3217){
			$Dine_Details.removeClass('animate__animated animate__fadeInUp');
		} 
	})
 
 })
 /* End of animate Dine details section */
 
 /* animate Drink details section */
 $(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		var $Drinks_Details = $('.Drinks_Details')
		
		if(positiontop > 2725){
			$Drinks_Details.addClass('animate__animated animate__fadeInUp');
		}else if (positiontop < 3811){
			$Drinks_Details.removeClass('animate__animated animate__fadeInUp');
		} 
	})
 
 })
 /* End of animate Drink details section */
 
 /* animate your cheff heading section */
 $(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		var $Your_Cheff_Container = $('.Your_Cheff_Container')
		
		if(positiontop > 3350){
			$Your_Cheff_Container.addClass('animate__animated animate__zoomIn');
		}else if (positiontop < 3405){
			$Your_Cheff_Container.removeClass('animate__animated animate__zoomIn');
		} 
	})
 
 })
 /* End of animate your cheff heading section */
 
 
 
 /* Animate total from booking page */
 
 $(document).ready(function(){
	$(window).scroll(function(){
		var positiontop = $(document).scrollTop();
		
		var $total_container = $('.Side_total_Container')
		
		if(positiontop > 2085){
			$total_container.addClass('animate__animated animate__fadeOutUp');
		}else if (positiontop < 3405){
			$total_container.removeClass('animate__animated animate__fadeOutUp');
		} 
	})
 
 })
 

