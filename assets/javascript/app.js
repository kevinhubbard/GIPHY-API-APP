$(document).ready(function() {
	var animals = ['dog', 'cat', 'pig', 'hen', 'lizard', 'bat', 'eagle', 'fish', 'tiger', 'funny+cat'];


	for (var i = 0; i<animals.length; i++){
		var animalList = $('#animalList');
		animalList.append('<button id="'+animals[i]+'" class="button">'+ animals[i] +'</button>'+' ');
	
	}

	$(document).on('click', '#add', function() {

		var input = $('input').val().trim();
		console.log(typeof(input));
		animalList.append('<button id="'+input+'" class="button">'+input+'</button>' + ' ');

		/* clear input field*/
		$('input').val('');
	});

	$(document).on('click', '.button', function() {
		// console.log($(this).attr('id'));
		var animal = $(this).attr('id');
		$('#gifs').empty();

		
		var url = 'http://api.giphy.com/v1/gifs/search?q=';
		var key = '&api_key=dc6zaTOxFJmzC&limit=10';
		$.ajax({
			url: url + animal + key,
			method: 'GET',
		})
		.done(function(response) {
			var results = response.data;

			for (var i = 0; i < results.length; i++) {
			var img = $('<img>');
			img.attr('src', results[i].images.fixed_height.url);
			$('#gifs').append(img);

			}
			// img.attr('src', Array[0].);
			// $(document).append(gifs);
		});
		
		
	});


});