function preload() {
    doodlenetmodel = ml5.imageClassifier("DoodleNet")
}

function setup() {
    canvas = createCanvas(220, 220);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    Speakermodel = window.SpeechSynthesis;
}

function draw() {
    strokeWeight(10);
    stroke("purple")
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)

    }
}

function classifyCanvas() {
    doodlenetmodel.classify(canvas, getResults);
}

function getResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("guess").innerHTML = results[0].label;
        document.getElementById("confidence").innerHTML = results[0].confidence * 100 + "%";
    }
}

function clearCanvas() { background("white"); }