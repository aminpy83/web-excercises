var x1 = Math.floor(Math.random() * 6 + 1);
var x2 = Math.floor(Math.random() * 6 + 1);


window.addEventListener('load', function () {
        // Code to execute after the page has fully loaded (including after a refresh)
        console.log('Page loaded or refreshed!', x1);
    
    if (x1 > x2) {
    document.querySelector("h1").innerHTML = "Player 1 is the Winneer";
    } else if (x1 === x2){
    document.querySelector("h1").innerHTML = "Both Players Won";
    } else {
    document.querySelector("h1").innerHTML = "Player 2 is the Winneer";
    } 
    document.querySelector(".img1").src = "./images/dice" + x1 + ".png";
    document.querySelector(".img2").src = "./images/dice" + x2 + ".png";
    });


