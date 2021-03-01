window.onload = function () {
    try {
        let start = document.getElementById("btn");
        start.addEventListener("click", function () { click() });
        for (let hole of holes) {
            document.getElementById(hole).addEventListener("click", function (e) {
                let target = e.target.id;
                hit(target);
            });
        }
    }
    catch{
        console.error("Something went wrong");
    }
}
let holes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
let yankee = null;
let g = false;
let score = 0;
function click() {
    if (!g) {
        document.getElementById("btn").innerText = "STOP";
        start();
    }
    else {
        document.getElementById("btn").innerText = "START";
        stop();
    }
}
function start() {
    score = 0;
    g=true;
    document.getElementById("score").innerText = `SCORE: ${score}`;
    interval = setInterval(() => {
        if (yankee != null) {
            noyankee(yankee);
            yankee = yesyankee();
        } else {
            yankee = yesyankee();
        }
    }, 1000);
}
function stop() {
    g = false;
    clearInterval(interval);
    noyankee(yankee);
    yankee = null;
}
function yesyankee() {
    let yankee = holes[Math.floor(Math.random() * 15)];
    document.getElementById(yankee).style = 'background: url(\"yankee.jpg\") no-repeat center center';
    return yankee;
}
function noyankee(yankee) {
    document.getElementById(yankee).style = 'background-color: black';
    document.getElementById(yankee).removeEventListener("click", function (e) {
        let target = e.target.id;
        hit(target);
    });
}
function hit(hole) {
    if (hole == yankee) {
        document.getElementById("score").innerText = `SCORE: ${++score}`;
        noyankee(yankee);
        yankee = null;
    }
    else if (score > 0) {
        document.getElementById("score").innerText = `SCORE: ${--score}`;
    }
}