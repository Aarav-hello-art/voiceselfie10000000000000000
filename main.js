var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function run(outcome) {
    console.log(outcome);
var output = outcome.results[0][0].transcript
document.getElementById("textbox").innerHTML = output
if (output == "take my selfie") {
    speak()
     
}

}

function speak() {
    var speechapi = window.speechSynthesis

    var speakdata = "taking your selfie in five seconds"
    var saythis = new SpeechSynthesisUtterance(speakdata)
    speechapi.speak(saythis)
    Webcam.attach("#camera")
    setTimeout(
        function () {
            snapshot()
            save()
        },5000
    )
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : "jpeg",
    jpeg_quality : 90  
})

function snapshot(){
Webcam.snap(

    function (img) {
        document.getElementById("result").innerHTML = "<img id='cpimg' src='"+img+"'>"
    }
)
}

function save() {
    link  = document.getElementById("link")
    image = document.getElementById("cpimg").src
    link.href = image
    link.click()
}