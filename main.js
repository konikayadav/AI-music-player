leftx = 0;
lefty = 0;
rightx = 0;
righty = 0;
score_left = 0;
score_right = 0;
status1 = "";
status2 = "";   
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults);
}
function draw() {
    image(video, 0, 0, 600, 500);
    status1 = song1.isPlaying();
    status2 = song2.isPlaying();
    if(score_left > 0.2) {

    }
}
function modelLoaded() {
    console.log("Model is successfully loaded.");
}
function gotResults(result) {
    if (result.length > 0) {
        console.log(result);
        leftx = result[0].pose.leftWrist.x;
        lefty = result[0].pose.leftWrist.y;
        score_left = result[0].pose.keypoints[9].score;
        score_right = result[0].pose.keypoints[10].score;
    }
}