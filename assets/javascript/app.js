$(document).ready(function() {
	var animals = ['cheech+chong', 'dog', 'cat', 'pig', 'hen', 'lizard', 'bat', 'eagle', 'fish', 'tiger', 'funny+cat'];
		


	for (var i = 0; i<animals.length; i++){
		var animalList = $('#animalList');
		animalList.append('<button id="'+animals[i]+'" class="button btn btn-primary">'+ animals[i] +'</button>'+' ');
	
	}
	$("input").keyup(function(event){
    if(event.keyCode == 13){
        $("#add").click();
    }
});

	$(document).on('click', '#add', function() {

		var test = $('input').val().trim();

		if (test === ''){
			alert('Enter a gif to search.');
		} else{
			console.log(typeof(input));
			var input = test.replace(/\s/g, '+');

			animalList.append('<button id="'+input+'" class="button btn btn-primary">'+input+'</button>' + ' ');

			/* clear input field*/
			$('input').val('');

		}

	});

	$(document).on('click', '.button', function() {
		
		var animal = $(this).attr('id');
		 $('#gifs').empty();

		
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