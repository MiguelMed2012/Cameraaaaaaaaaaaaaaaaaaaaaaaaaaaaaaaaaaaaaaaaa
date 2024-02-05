function preload() {

}

var color;

function setup() {
    canvas=createCanvas(500, 500);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    color="";
}

function draw() {
    image(video,0,0,500,500);
    tint(color)
}

function filterTint() {
    color = document.getElementById("colorNameInput").value;
}

function takeSnapshot() {
    save('xxcbvbfghjdsgilsdjfhgilsufhgodsjghesughufyh.jpg')
}