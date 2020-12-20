Prediction1="";
Prediction2="";

Webcam.set({
   width: 350,
    height:300,
    image_format:'jpg',
    jpg_quality: 100
});

Camera=document.getElementById("camera");
Webcam.attach('#Camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="result" src="'+data_uri+'">';
    });
}

console.log ("ml5 version",ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Xc--cGXwr/model.json',modelLoaded);

function modelLoaded(){
    console.log ("model loaded successfully");
}

function speak(){
    var synth= window.speechSynthesis;
     speakdata1="The first Prediction is"+prediction1;
     speakdata2="The second Prediction is"+prediction2;
     utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
     synth.speak(utterThis);
}