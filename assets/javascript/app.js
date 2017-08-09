$(document).ready(function() {
	//Gives user some default searchs
	var animals = ['dog', 'cat', 'pig', 'hen', 'lizard', 'bat', 'eagle', 'fish', 'tiger', 'funny+cat'];
		

	//Append our default search animals to the document with a button
	for (var i = 0; i<animals.length; i++){
		var animalList = $('#animalList');
		animalList.append('<button id="'+animals[i]+'" class="button btn btn-primary">'+ animals[i] +'</button>'+' ');
	
	}
	//Clicking enter adds to list
	$("input").keyup(function(event){
    if(event.keyCode == 13){
        $("#add").click();
    }
});
	//Adding a user defined search
	$(document).on('click', '#add', function() {

		var test = $('input').val().trim();
		//If field is blank alert the user
		if (test === ''){
			alert('Enter a gif to search.');
		} else{
			console.log(typeof(input));
			//Giphy search needs a + used insted of spaces for search query to work
			var input = test.replace(/\s/g, '+');
			//Append new search to list
			animalList.append('<button id="'+input+'" class="button btn btn-primary">'+input+'</button>' + ' ');

			/* clear input field*/
			$('input').val('');

		}

	});
	//Giphy search
	$(document).on('click', '.button', function() {
		//Clear search results before displaying a new one
		var animal = $(this).attr('id');
		 $('#gifs').empty();

		//Giphy search key
		var url = 'https://api.giphy.com/v1/gifs/search?q=';
		var key = '&api_key=dc6zaTOxFJmzC&limit=10';

		$.ajax({
			url: url + animal + key,
			method: 'GET',

		})
		.done(function(response) {
			console.log(url + animal + key);
			var results = response.data;
			
			
			for (var i = 0; i < results.length; i++) {
				var rating = results[i].rating;
				var url = results[i].url;
				var gif = $('<div>')
				var img = $('<img>');
				var p =  $('<p>').text('Rating: ' + rating);
			
				img.attr({
					class: 'gif',
					src: results[i].images.fixed_height.url
				});

				gif.append(img);
				gif.append(p);
				

				
				$('#gifs').append(gif);
				
			}

		});

		
	});


});