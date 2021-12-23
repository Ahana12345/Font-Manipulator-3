noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(520, 450);
    canvas.position(600, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX +"noseY =" + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX ="+ leftWristX +"rightWristX ="+ rightWristX +"difference = "+ difference);
    }
}
function draw(){
    background('#6C91C2');
    document.getElementById("text_side").innerHTML = "Width And Height of a text will be = " + difference +" px"; 
    textSize(difference);
    fill('#FFE787');
    text('Wish you a Merry Christmas and Happy New Year', 50, 400);
}