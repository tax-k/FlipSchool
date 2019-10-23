function setup() {
    createCanvas(500, 500);
    background(0, 255, 127);


    face(200, 200);
    face(350, 300);
}

function face(x, y) {
    noStroke();
    fill(255, 0, 127);
    ellipse(x, y, 300, 300);


    let eyeDistance = 60;


    makeEye(x, y, eyeDistance);
    makeRetina(x, y, eyeDistance);
    makeNose(x, y);
    makeMouth(x, y);
    makeEyeBrow(x, y);
}

function makeEye(x, y, distance) {

    fill(255);
    ellipse(x - distance, y, 100, 100);
    ellipse(x + distance, y, 100, 100);
}

function makeRetina(x, y, distance) {
    fill(0, 255, 127);
    ellipse(x - distance, y, 50, 50);
    ellipse(x + distance, y, 50, 50);
}

function makeNose(x, y) {
    stroke(255);
    strokeWeight(5);
    line(x - 10, y + 45, x, y + 50);
    line(x + 10, y + 45, x, y + 50);
    noStroke();
}

function makeMouth(x, y) {
    rectMode(CENTER);
    fill(255);
    ellipse(x, y + 90, 60, 30);
}

function makeEyeBrow(x, y) {
    stroke(255);
    strokeWeight(5);
    var browDistance = 60;

    rect(x - browDistance, y - 60, 50, 10, 10);
    rect(x + browDistance, y - 70, 50, 10, 10);
    noStroke();
}
