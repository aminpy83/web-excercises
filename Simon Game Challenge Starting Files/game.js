buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

var level = 0
var firstPressedKey = ""


function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4); 
    var randomChosenColour = buttonColours[randomNumber];  
    
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(100)
    .fadeOut(100).fadeIn(100);

    $("h1").text("level " + level);
    level = level + 1;

}

function playSound(name){ 
    
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}


function clicks() {
    
    $(".btn").on("click", function(event){
        //playSound(this.id);
        $("#" + this.id ).fadeOut(50)
        .fadeIn(100).fadeOut(100).fadeIn(100).addClass("pressed");
    
        setTimeout(() => {
            $("#" + this.id).removeClass("pressed");
        }, 100);

        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        check(userClickedPattern.length - 1,this.id );
    })
}

function start(){
    $(document).one("keypress", (x) =>{
    firstPressedKey = x.key;
    nextSequence();
    clicks();
})
}

function check(index, sound){
    if (userClickedPattern[index] === gamePattern[index]) {
        playSound(sound);
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                userClickedPattern = [];
                nextSequence();
            }, 700);
        }
    }
    else{
        var audio = new Audio("sounds/wrong.mp3")
        audio.play()
        setTimeout(() => {
            $("body").toggleClass("game-over");
        }, 200);
        $("body").toggleClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    }
}

function startOver(){
    document.addEventListener("keypress",() =>{
        location.reload(); 
        // userClickedPattern = [];
        // gamePattern = [];
        // level = 0;
        // start();
     }, {once: true} )
}

start();