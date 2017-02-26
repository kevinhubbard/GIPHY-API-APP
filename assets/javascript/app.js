$(document).ready(function() {
	var animals = ['dog', 'cat', 'pig', 'chicken', 'lizard', 'bat', 'eagle', 'fish', 'tiger', 'funny+cat'];
	var animalList = $('#animalList');

	



	for (var i = 0; i<animals.length; i++){
		$('#animalList').append('<button id="'+animals[i]+'">'+ animals[i] +'</button>'+' ');
	
	}


});