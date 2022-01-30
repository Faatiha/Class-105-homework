Webcam.set({
    width:360,
    height:300,
    image_format:'png',
    png_format:90
});

 camera = document.getElementById("camera");

 Webcam.attach('#camera');

 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("results").innerHTML = '<img src="'+data_uri+'" id="selfie_png">';
     });
 }

 console.log('ml5 version: ', ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OJz1SA7YN/model.json', modelLoaded);

 function modelLoaded(){
     console.log("Model is loaded!");
 }

 function check(){
     image = document.getElementById("selfie_png");
     classifier.classify(image, gotResult);
 }

 function gotResult(error, results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("result_person_name").innerHTML = results[0].label;
         document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(2)*100+"%";
     }
 }
 