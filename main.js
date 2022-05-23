
status = "";
function preload(){

}
function setup(){
canvas = createCanvas(350, 290);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video , 0 , 0 , 350 , 290);
}

function kabbab(){
    objectd = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("stats").innerHTML = "Status: Detecting objects";
}
function modelLoaded(){
    console.log("code green");
    status = true;
    
}