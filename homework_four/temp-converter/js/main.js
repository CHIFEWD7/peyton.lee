// Be sure to use descriptive names for variables!!


// when the user clicks on the fahrenheit to celsius button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


// when the user clicks on the celsius to fahrenheit button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


// $('#fahrenheit_to_celsius').on('click', function() {

// 	var fahrenheit = $('#temperature').val();
// 	fahrenheit = parseFloat(fahrenheit);

// 	var celsius = (fahrenheit - 32) / 1.8;
// 	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// 	celsius = celsius.toFixed(2);

	// // Hint: http://dev.w3.org/html5/html-author/charref
	// $("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
	// $('#temperature').val('');
// });



function getCelsius() {
	var fahrenheit = $("#temperature").val();
	fahrenheit = parseFloat(fahrenheit);

	var celsius = (fahrenheit - 32) / 1.8;
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
	celsius = celsius.toFixed(2);

	$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
	$("#temperature").val('');


		var low = 0
		var medlow = 30
		var med = 50
		var medhigh = 80


if (fahrenheit < low) {

	$("body").css("background-color", "blue");	

}else if (fahrenheit >= low && fahrenheit <= medlow) {

	$("body").css("background-color", "green");

}else if (fahrenheit > medlow && fahrenheit <= med) {

	$("body").css("background-color", "yellow");

}else if (fahrenheit > med && fahrenheit <= medhigh) {

	$("body").css("background-color", "orange");

}else if (fahrenheit >= medhigh) {

	$("body").css("background-color", "red");

}else {
	$("body").css("background-color", "gray");
}}
// $("#fahrenheit_to_celsius").on("click", getCelsius());

$("#fahrenheit_to_celsius").on("click", function(){
	getCelsius();
});
	

function getFahrenheit() {
	var celsius = $('#temperature').val();
	celsius = parseFloat(celsius);

	var fahrenheit = 1.8 * celsius + 32;
	fahrenheit = fahrenheit.toFixed(2);

	$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
	$('#temperature').val('');
}


$('#celsius_to_fahrenheit').on('click', function() {
	getFahrenheit();
});



// $('#celsius_to_fahrenheit').on('click', function () {
// 	var celsius = $('#temperature').val();
// 	celsius = parseFloat(celsius);

// 	var fahrenheit = 1.8 * celsius + 32;
// 	fahrenheit = fahrenheit.toFixed(2);

// 	$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
// 	$('#temperature').val('');
// });



















