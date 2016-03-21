// Create a global variable for the total

var total = 0;

// Create a function you can run when you submit the field Hint: .submit() in jQuery

$("#entry").submit(enter);

// // Remember parseFloat() and toFixed() to deal with formatting numbers. 
//This will come in handy when dealing with displaying a "currency friendly" format 
// //(HINT: create an additional function to format your number into a "currency friendly" format)
// 	function currencyFormat(number) {

function enter() {

	var entry;

	event.preventDefault();

	var entry = $("#newEntry").val();
	var entry = parseFloat(entry);

	$("#entries").append("<tr><td>&dollar;" + entry + "<tr><td>");

	total = entry + total;

	$("#total").html(total);

	$('#newEntry').val('');


};


function currencyFormat() {
	var currency;

	var currency = parseFloat(entry);
	currency = toFixed(2);

	return currency;
}


// ugh this is as far as i got :( 






