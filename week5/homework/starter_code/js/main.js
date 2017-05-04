$(document).ready(function(){
	
	// Prevent links
	$("a").click(function(event){
	    event.preventDefault();
	});

	// Read more
	$(".readmore").click(function(){
        $("#show-this-on-click").slideDown();
        $(".readless").show();
        $(".readmore").hide();
        $("<br>").insertBefore("p#show-this-on-click"); // don't click me too fast! :)
    });

	// Read Less
	$(".readless").click(function(){
        $(".readless").hide();
        $(".readmore").slideUp(300).fadeIn(600);
        $("#show-this-on-click").slideUp();
        $(".post > br").remove(); // this took a while to figure out despite being super simple
    });

		/* 
		I liked the way the above looked instead, so hopefully that's okay! If not, the below should match the instructions exactly:

			$(".readless").click(function(){
				$(".readless").hide();
	        	$("#show-this-on-click").slideUp();
	        	$(".readmore").show(); 
    	*/

	// Sidebar
	$(".learnmore").click(function(){
		$("span.hide").slideDown();
		$(".learnmore").hide();
		$("<br>").insertBefore("span.hide");
	})
});