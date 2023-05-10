moustache_x=0;
moustache_y=0;
function preload(){
  moustache=loadImage('https://i.postimg.cc/BZwr1rsm/istockphoto-485318064-612x612-removebg-preview.png');

}

function setup(){
 canvas=createCanvas(300,300);
 canvas.center();
 canvas.position(550,250);
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();
 posenet=ml5.poseNet(video,modelloaded);
 posenet.on('pose',gotPoses);
}
function modelloaded(){
console.log("Posenet has been initialised");

}
function gotPoses(results){
if(results.length>0){
  console.log(results);
 moustache_x=results[0].pose.nose.x-25;
moustache_y=results[0].pose.nose.y+5;
}


}
function draw(){
image(video,0,0,300,300);
image(moustache,moustache_x,moustache_y,50,50);
}
function takesnapshot(){
  save('takesnapshotofbackground.png');


}
