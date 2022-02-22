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
]


function init() {
    let sortedJams = jams.sort(()=> Math.random() - 0.5);
    var counter = document.getElementById("timer");
    console.log(counter);
    // counter.innerHTML = "<h1>01:00 Min";
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