window.onload = function(){
	//Fade in
	var logo = document.getElementById("left");
	var contattaci = document.getElementById("contattaci");
	var scopri = document.getElementById("scopri");
	
	function fadeIn(elem){
		if(elem == logo){
			elem.className = elem.className + " fade_in_logo";		
		}
		else{
			elem.className = elem.className + " fade_in_interaction";		
		}
	}
	
	fadeIn(logo);
	fadeIn(contattaci);
	setTimeout(function(){
		fadeIn(scopri)
	}, 2000);
	
	//Button animation
	var facebook = document.getElementById("facebook");
	facebook.addEventListener("mouseover", function(){expand(facebook, facebook.className)});
	var tripadvisor = document.getElementById("tripadvisor");
	tripadvisor.addEventListener("mouseover", function(){expand(tripadvisor, tripadvisor.className)});

	
	function expand(elem, original_class){
		elem.className = original_class + " expand";
		elem.addEventListener("transitionend", function(){squeeze(elem, original_class)});
	}
	function squeeze(elem, original_class){
		elem.className = original_class;
	}
	
	//Bounce
	var contattaci = document.getElementById("contacts");
	var arrow = document.getElementById("bounce_img");
	var original_arrow = arrow.className;
	
	function bounce(){
		arrow.className += "bounce ";
	}
	
	contattaci.addEventListener("mouseover", function(){bounce()});
	contattaci.addEventListener("transitionend", function(){
		arrow.className = "";
	});
}