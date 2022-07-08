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
    play(e.target.value);
})

document.activeElement.addEventListener("mouseup", function(e) {
    mute(e.target.value);
})