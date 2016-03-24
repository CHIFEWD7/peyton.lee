// Declare global variable for the total

var total = 0;

// Tie event to happen when you hit enter - give it the function that we want it to run

$("#entry").submit(enter);



function enter() {
//getting the value of the input with an id of #newEntry

	var entry = $("#newEntry").val();

// taking the string of the text in the input and turning it into a number so that we can work with it and change it in JS
	var entry = parseFloat(entry);

//declaring a variable of 'currency' and running the currencyFormat() function. notice 'entry' is being passed into this function
//currency should equal '$20.00'
	var currency = currencyFormat(entry);

//append a new table row with 'currency' ($20.00) inside of it 
	$("#entries").append("<tr><td></td><td>" + currency + "</td><tr>");

//keeping a tally of what has been added so far
	total += entry;

//get it to display the total
	$("#total").html(currencyFormat(total));

//clear the field for the next value. val with an empty string in it, field is empty every time the function is ran
	$('#newEntry').val('');

//housekeeping thing - not going to return anything, function does it's job
	return false;
};


function currencyFormat(number) {

	var currency = parseFloat(number);

//format the user's input to '20.00' if they put in '20'
	currency = toFixed(2);

//taking the number and adding a $ in front of it
	currency = "$" + currency;

// this should return '$20.00' if '20' was entered 
	return currency;

//outside of here, you do not have access to the currency variable

}







