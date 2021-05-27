var canvas=null;
var video=null;
var newImageClassifier=null;

function preload(){
}

function onModelLoaded(){
    console.log('Model Loaded!');
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.querySelector('.resulting_okoye_family_member').innerText='Result: '+results[0].label;
        document.querySelector('.resulting_accuracy').innerText='Accuracy: '+results[0].confidence.toFixed(3);
    }
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    newImageClassifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QgCL4Xeio/model.json', onModelLoaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    newImageClassifier.classify(video, gotResult);
}