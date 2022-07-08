// Menu Open Animation
let body = document.querySelector("body");
let menuBtn = document.getElementById("menu");
let isOpen = false;

menuBtn.addEventListener("click", function() {
    if (!isOpen) {
        body.style.left = "-30rem";
        isOpen = true;
    }
    else {
        body.style.left = "0";
        isOpen = false;
    }
})





let noteNames = document.getElementsByClassName("note-name");

// Label Notes
document.getElementById("key-assist").addEventListener("click", function() {
    if (this.checked) {
        for (let i = 0; i < noteNames.length; ++i) {
            noteNames[i].style.fontSize = "1.7rem";
        }
    }
    else {
        for (let i = 0; i < noteNames.length; ++i) {
            noteNames[i].style.fontSize = "0";
        }
    }
})





// map keys with keyboard
let keysObject = {
    'A0': {freq: 27.50},
    'A#0': {freq: 29.14},
    'B0': {freq: 30.87},
    'C1': {freq: 32.70},
    'C#1': {freq: 34.65},
    'D1': {freq: 36.71},
    'D#1': {freq: 38.89},
    'E1': {freq: 41.20},
    'F1': {freq: 43.65},
    'F#1': {freq: 46.25},
    'G1': {freq: 49.00},
    'G#1': {freq: 51.91},
    'A1': {freq: 55.00},
    'A#1': {freq: 58.27},
    'B1': {freq: 61.74},
    'C2': {freq: 65.41},
    'C#2': {freq: 69.30},
    'D2': {freq: 73.42},
    'D#2': {freq: 77.78},
    'E2': {freq: 82.41},
    'F2': {freq: 87.31},
    'F#2': {freq: 92.50},
    'G2': {freq: 98.00},
    'G#2': {freq: 103.83},
    'A2': {freq: 110.00},
    'A#2': {freq: 116.54},
    'B2': {freq: 123.47},
    'C3': {input: 'z', freq: 130.81},
    'C#3': {input: 's', freq: 138.59},
    'D3': {input: 'x', freq: 146.83},
    'D#3': {input: 'd', freq: 155.56},
    'E3': {input: 'c', freq: 164.81},
    'F3': {input: 'v', freq: 174.61},
    'F#3': {input: "g", freq: 185.00},
    'G3': {input: 'b', freq: 196.00},
    'G#3': {input: 'h', freq: 207.65},
    'A3': {input: 'n', freq: 220.00},
    'A#3': {input: 'j', freq: 233.08},
    'B3': {input: 'm', freq: 246.94},
    'C4': {input: ',', freq: 261.63},
    'C#4': {input: 'l', freq: 277.18},
    'D4': {input: '.', freq: 293.66},
    'D#4': {input: ';', freq: 311.13},
    'E4': {input: '/', freq: 329.63},
    'F4': {input: 'q', freq: 349.23},
    'F#4': {input: '2', freq: 369.99},
    'G4': {input: 'w', freq: 392.00},
    'G#4': {input: '3', freq: 415.30},
    'A4': {input: 'e', freq: 440.00},
    'A#4': {input: '4', freq: 466.16},
    'B4': {input: 'r', freq: 493.88},
    'C5': {input: 't', freq: 523.25},
    'C#5': {input: '6', freq: 554.37},
    'D5': {input: 'y', freq: 587.33},
    'D#5': {input: '7', freq: 622.25},
    'E5': {input: 'u', freq: 659.25},
    'F5': {input: 'i', freq: 698.46},
    'F#5': {input: '9', freq: 739.99},
    'G5': {input: 'o', freq: 783.99},
    'G#5': {input: '0', freq: 830.61},
    'A5': {input: 'p', freq: 880.00},
    'A#5': {input: '-', freq: 932.33},
    'B5': {input: '[', freq: 987.77},
    'C6': {input: ']', freq: 1046.5},

    'C#6': {freq: 1108.73},
    'D6': {freq: 1174.66},
    'D#6': {freq: 1244.51},
    'E6': {freq: 1318.51},
    'F6': {freq: 1396.91},
    'F#6': {freq: 1479.98},
    'G6': {freq: 1567.98},
    'G#6': {freq: 1661.22},
    'A6': {freq: 1760.00},
    'A#6': {freq: 1864.66},
    'B6': {freq: 1975.53},

    'C7': {freq: 2093.00},
    'C#7': {freq: 2217.46},
    'D7': {freq: 2349.32},
    'D#7': {freq: 2489.02},
    'E7': {freq: 2637.02},
    'F7': {freq: 2793.83},
    'F#7': {freq: 2959.96},
    'G7': {freq: 3135.96},
    'G#7': {freq: 3322.44},
    'A7': {freq: 3520.00},
    'A#7': {freq: 3729.31},
    'B7': {freq: 3951.07},

    'C8': {freq: 4186.01},
}

// audio stuff
let context = new (window.AudioContext || window.webkitAudioContext)();
let el;

// find the right pitch by the keyboard input
function findPitch(e) {
    // if the input property in the object exists and is equal to the keyboard input, 
    // then the id is the note we want to play
    for (let id in keysObject) {
        if (keysObject[id].input != undefined && keysObject[id].input == e.key) {
            el = document.querySelector('[value="' + id + '"]'); // get piano key in HTML doc
            return id;
        }
    }
    // return false if the key that was pressed isn't a valid input for the piano
    return false;
}

let gainNodes = [];

function play(pitch) {
    let osc = context.createOscillator();
    let gainNode = context.createGain();
    osc.type = "sine";
    osc.frequency.value = keysObject[pitch].freq;
    osc.start(0);
    gainNode.gain.setValueAtTime(0.5, context.currentTime); // attack
    gainNode.gain.linearRampToValueAtTime(0, context.currentTime + 2); // decay
    gainNodes[pitch] = gainNode; // store gain node to manipulate volume of key later (see mute function)
    osc.connect(gainNodes[pitch]);
    gainNodes[pitch].connect(context.destination);
}

function mute(pitch) {
    gainNodes[pitch].gain.setValueAtTime(0, context.currentTime); // mute
}

// press key on keybaord -> play note
document.addEventListener("keydown", function(e) {
    let note = findPitch(e);
    if (!e.repeat && note != false) {
        play(note);
        el.style.filter = "invert(0.5)"; // change color of key in piano
    }
})

// let go of key on keybaord -> stop playing note
document.addEventListener("keyup", function(e) {
    let note = findPitch(e);
    if (note != false) {
        mute(note);
        el.style.filter = "invert(0)"; // change background color of piano key
    }
})

// press key with mouse -> play note until they let go
document.activeElement.addEventListener("mousedown", function(e) {
    // user presses a piano key -> play the note and change the background color of the key
    if (e.target.tagName == "BUTTON") {
        play(e.target.value);
        e.target.style.filter = "invert(0.4)"
    }    
})

document.activeElement.addEventListener("mouseup", function(e) {
    // user lets go of a piano key -> mute the note and change the background color of the key
    if (e.target.tagName == "BUTTON") {
        mute(e.target.value);
        e.target.style.filter = "invert(0)"
    }    
})