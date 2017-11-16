
$(function(){
	$('#submit-btn').click(function(){
		// prevent the submit button from refreshing the page
		event.preventDefault();
		// get value of user input
		var city = $('#city-type').val();
		//add code to make sure case doesn't matter
		if(city === 'nyc' || city === 'new york' || city === 'new york city'){
			$('body').attr('class','nyc');
		}
		/*else(city === 'sfo' || city === 'san francisco' || city === 'san fran'){
			$('body').attr('class','sf');
		}
		else(city === 'la' || city === 'los angeles' || city === 'lax'){
			$('body').attr('class','la');
		}*/
	})
});
