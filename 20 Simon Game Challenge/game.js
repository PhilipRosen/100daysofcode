
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0
var gameStarted = false


//Set the game sequence
function nextSequence() {

    userClickedPattern=[];

    level++;

    $("#level-title").text("Level " + level);
    
    var randonNumber = Math.floor(Math.random() * 4)

    var randomChosenColor = buttonColors[randonNumber];

    gamePattern.push(randomChosenColor);

    console.log(randomChosenColor+ ".mp3")

    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor)
};


function startOver(){
    level = 0;
    gamePattern=[];
    gameStarted = false;
}

//play sounds the match the button color
function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
};


//animate the button being pressed
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100); 
};


//event listener for when the buttons are clicked
$(".btn").click(function(){
    
    userChosenColor = this.id

    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor)

    animatePress(userChosenColor)

    checkAnswer(userClickedPattern.length-1)

    console.log(userClickedPattern)
    console.log(gamePattern)
});

//event listener for when a key is pressed to start the game
$(document).keydown(function(){
    if (gameStarted == false) {
        $('#level-title').text("Level " + level)
        nextSequence()
        gameStarted = true
    } 
});

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("True");
        
        if(userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000); 
        }
    
    } else {
            console.log("False")
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);

            startOver()
        }
    };