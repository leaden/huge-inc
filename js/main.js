document.getElementById("toggle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");

});


var lastScrollTop = 0;
   window.addEventListener("scroll", function(){
   	var currentScroll = window.pageYOffset || document.body.scrollTop;
   	if (currentScroll > lastScrollTop){
   		console.log("down");
   	}else {
   		console.log("up");
   	}
   	lastScrollTop = currentScroll;
   }, false);

   if (currentScroll > lastScrollTop){
   	document.getElementById("nav-header").classList.remove("header-in");
   	document.getElementById("nav-header").style.opacity = 0;
   	
   } else{

   }

   