// 1.	Slide the header element up when it is clicked on.
$("header").on("click", function(){

	$(this).slideUp();
});

// 2.	Remove the purplebox class from everything.
$("body").removeClass('purplebox');


// 3.	Hide all of the div’s in #row4
$("#row4 #div").hide();


// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$(".add-para").append("<b>I have been added</b>");

// 5.	Add a class in your css and add it to all items with the class .box
$(".box").addClass("five");

// 6.	Show the footer when the anchor in #box2 is clicked
$("#box2").find("a").on("click", function(){

	$("footer").show();
});

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$("#box3").find("span").addClass("seven");


// 8.	Add a unique class to your CSS and add it to the articles in #row1
$("#row1").find("article").addClass("unique");

// 9.	Change the background color of all the articles
$("body").find("article").css("background-color", "pink");

// 10.	Change the font color of all the articles in row 2
$("#row2").find("article").css("color", "yellow");

// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.
$("h4").siblings().hide();

// 12.	Clicking on #box7 should hide the span within the h2
$("#box7").on("click", function(){

	$("h2").find("span").hide();
});

// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
$("#box12").prepend( "<h3>Hello there!</h3>" );

// 14.	SlideUp all the h1s on the page
$("h1").slideUp();

// 15. Add the selected class [already in the CSS] to the divs in #row4
$("#row4").find("div").addClass("selected");

// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
$("button").on("click", function(){

	$("body").find("div").removeClass("selected");

	$("header").fadeIn();

	$("footer").fadeIn();

	$(".box").fadeIn();
});
