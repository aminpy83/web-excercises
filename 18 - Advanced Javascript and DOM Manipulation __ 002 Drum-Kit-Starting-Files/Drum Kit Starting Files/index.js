


for (var i = 0; i < document.querySelector(".set").children.length ; i++) {
 
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonHtml = this.innerHTML;
    var key = buttonHtml;
    keypress(key);
    buttonAnimation(buttonHtml);
    })
    
    document.querySelectorAll(".drum")[i].addEventListener('keypress', function (event) {
        keypress(event.key);
    })
}
    
function keypress(key) {
    
    switch (key) {
        case 'a':
            var tom1 = new Audio('sounds/tom1.mp3');
            tom1.play();
            break;
        case 'w':
            var tom2 = new Audio('./sounds/tom2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom4.mp3');
            tom4.play();
            break;
        case 'k':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'j':
            var bass = new Audio('./sounds/bass.mp3');
            bass.play();
            break;
        case 'l':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function() {
        activeButton.classList.toggle("pressed");
    }, 100);
}














// var houseKepper1 = {
//     Name : "Georgie",
//     Age : 40,
//     bodyShape : "skinny"
// }

// function HouseKeppers(Name,  Age, bodyShape) {
//     this.Name = Name;
//     this.Age = Age; 
//     this.bodyShape = bodyShape;
//     this.clean = function() {
//         alert("cleaning the place");
        
//     }   
// }
// var houseKepper1 = new HouseKeppers ('a', 12, 'q');
// var houseKepper2 = new HouseKeppers ('b', 13, 'e');