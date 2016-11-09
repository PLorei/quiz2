// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function(){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!")
})(jQuery);

$(document).ready(function () {

	change_OL_elements();
	$("#clickButton").on('click', function(e) {
		e.preventDefault;
		showGoodbye();
	});

	$(".accordion-toggle").on('click', function(e) {
		e.preventDefault;

		// hide all showing accordions
		$(".accordion-show").each(function() {
			$(this).removeClass("accordion-show");
			$(this).addClass("accordion-hide");
		});

		// show children
		$(this).children("div").each(function () {
			$(this).removeClass("accordion-hide");
			$(this).addClass("accordion-show");
		});
	});

	$("#shrugButton").on('click', function(e) {
		e.preventDefault;
		shrug();
	});

});

function shrug() {
	$("p").each(function () {
		$(this).text("¯" +"\\" + "_(ツ)_/¯");
	});
}

function change_OL_elements() {
	var cnt = 0;

	$("ol").children("li").each(function() {
		$(this).css("color", "blue");
		$(this).text("this is OL child #" + cnt + ".");
		cnt++;
	});
}

function showGoodbye() {
	setTimeout(function() {
			$("body").addClass("hidden");
	}, 1000);
	setTimeout(function() {
		$("body").replaceWith("<h2 style='color:#4bd94b' id='message'>Goodbye, thanks for visiting!</h2>");
		$("body").removeClass("hidden");
	}, 2000);

}
