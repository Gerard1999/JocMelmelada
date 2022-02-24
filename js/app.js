/**
 * Melmelada Game
 * By Gerard López
 */

var gameStarted = false;
var jams = [
    {name : "maduixa", src: "../images/maduixa.png"},
    {name : "raim", src: "../images/raim.png"},
    {name : "poma", src: "../images/poma.png"},
    {name : "pressec", src: "../images/pressec.png"},
];


function comptador(min, sec) {
    var counter = document.getElementById("timer");
    var timer = setInterval(function() {
        if (sec == 0) { sec = 59; min--;} 
        else { sec--; }
        counter.innerHTML = (min < 10 ? "0":"") + min + ":" + (sec < 10 ? "0":"") + sec;
        if (min == 0 && sec == 0) {
            console.log("finish");
            clearInterval(timer);
        }
    }, 1000);
}


function init() {
    let sortedJams = jams.sort(()=> Math.random() - 0.5);

    comptador(0, 5);

    let fruit1 = document.getElementById("fruit1");
    let fruit2 = document.getElementById("fruit2");
    let fruit3 = document.getElementById("fruit3");
    let fruit4 = document.getElementById("fruit4");
    let fruits = document.querySelector(".fruits");

    // fruits.style.width = "320px";
    // fruit4.parentElement.style.display = "none";

    fruit1.src = sortedJams[0].src;
    fruit2.src = sortedJams[1].src;
    fruit3.src = sortedJams[2].src;
    fruit4.src = sortedJams[3].src;
}






function _init() {
    init();
}

window.onload = _init;