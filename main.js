//John = new human(genes);
//John.speak("Hi! My name is John.");

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    speechdata = "Hi Ms.Usha Rani";
    var utterThis = new SpeechSynthesisUtterance(speechdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({width : 320, height : 240, image_format : "png", png_quality : 100});
camera = document.getElementById("camera");