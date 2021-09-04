song = "";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightristY=0;
scorely=0;
function preload(){
    song=loadSound('UGH!.mp3');
}


function setup(){
    canvas = createCanvas(450,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet('video',modelLoaded);
    posenet.on('pose',gotPoses);
}


function draw(){
image(video,0,0,450,300);


fill("#FF0000");
stroke("#FF0000");

circle(leftwristX,leftwristY,20);
mousefruggy=Number(leftwristY);
fruggy=floor(mousefruggy);
volume=fruggy/500;
document.getElementById('vol').innerHTML='volume = ' +volume;





}



function play(){
    song.play();
    song.setVolume(0.2);
    song.rate(1);

}


function modelLoaded(){
    console.log('swdekfgjSCDGHJfwghvaagjsdfkadsghjf cahbgw4Se');
}



function gotPoses(results){
    if(length.results>0){
        console.log(results);
        scorely=results[0].pose.keypoints[9].score;
        console.log(scorely)
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log('lx= '+leftwristX+'ly= '+leftwristY+'rx= '+rightwristX+'ry= '+rightwristY);
    }
   
}