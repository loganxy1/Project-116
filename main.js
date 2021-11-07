noseX = 0;
noseY = 0;

function preload(){
    nose = loadImage("https://lh3.googleusercontent.com/proxy/NuoDb4hcKn18sxsamzNcBCZ566NkMRy1VjI6di9Sn0PtaNcYOg9TT5Mh3BdM-XrV1d7bTxuUcsIA4dtwQrZssCTvFdIM4IaQ29lsQoM6nQVCLkAn0zij");
}

function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 450, 450);
    image(nose, noseX, noseY, 60, 60);
}

function save(){
    save("daBaby.png");
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
        noseX = results[0].pose.nose.x - 28;
        noseY = results[0].pose.nose.y - 10;

        console.log("Nose y = "+results[0].pose.nose.y);
        console.log("Nose x= "+results[0].pose.nose.x) 
    }
}