
//Using jQuery to get the current setting of an element
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

//Using jQuery to select and change a CSS
$("h1").css("color", "red");

console.log($("h1").css("color"));


//Using jQuery to add a class to an element (better separation of concern)
$("h2").addClass("big-title")



//Adding an event listeners with jQuery
$("h1").click(function() {
    $("h1").css("color", "purple").slideUp().slideDown()
})

$("button").click(function() {
    $("h1").css("color", "green")
})

//Using on method for event listeners
$("h2").on("mouseover", function() {
    $("h2").css("color", "purple")
})

//Detech key strokes in input box

$("input").keydown(function(event){
    $("h1").text(event.key)
})