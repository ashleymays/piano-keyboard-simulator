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





// press keys
let keysObject = {
    'z': {pitch: "C3", freq: 130.81},
    's': {pitch: "C#3", freq: 138.59},
    'x': {pitch: "D3", freq: 146.83},
    'd': {pitch: "D#3", freq: 155.56},
    'c': {pitch: "E3", freq: 164.81},
    'v': {pitch: "F3", freq: 174.61},
    'g': {pitch: "F#3", freq: 185.00},
    'b': {pitch: "G3", freq: 196.00},
    'h': {pitch: "G#3", freq: 207.65},
    'n': {pitch: "A3", freq: 220.00},
    'j': {pitch: "A#3", freq: 233.08},
    'm': {pitch: "B3", freq: 246.94},
    ',': {pitch: "C4", freq: 261.63},
    'l': {pitch: "C#4", freq: 277.18},
    '.': {pitch: "D4", freq: 293.66},
    ';': {pitch: "D#4", freq: 311.13},
    '/': {pitch: "E4", freq: 329.63},
    'q': {pitch: "F4", freq: 349.23},
    '2': {pitch: "F#4", freq: 369.99},
    'w': {pitch: "G4", freq: 392.00},
    '3': {pitch: "G#4", freq: 415.30},
    'e': {pitch: "A4", freq: 440.00},
    '4': {pitch: "A#4", freq: 466.16},
    'r': {pitch: "B4", freq: 493.88},
    't': {pitch: "C5", freq: 523.25},
    '6': {pitch: "C#5", freq: 554.37},
    'y': {pitch: "D5", freq: 587.33},
    '7': {pitch: "D#5", freq: 622.25},
    'u': {pitch: "E5", freq: 659.25},
    'i': {pitch: "F5", freq: 698.46},
    '9': {pitch: "F#5", freq: 739.99},
    'o': {pitch: "G5", freq: 783.99},
    '0': {pitch: "G#5", freq: 830.61},
    'p': {pitch: "A5", freq: 880.00},
    '-': {pitch: "A#5", freq: 932.33},
    '[': {pitch: "B5", freq: 987.77},
    ']': {pitch: "C6", freq: 1046.5},
}

// audio stuff
let context = new (window.AudioContext || window.webkitAudioContext)();
let el;
function findKey(e) {
    if (keysObject[e.key] == undefined) { 
        return false; 
    }
    let pitch = keysObject[e.key].pitch;
    el = document.querySelector('[value="' + pitch + '"]');
    return true;
}

let gainNodes = [];

function play(key) {
    let osc = context.createOscillator();
    let gainNode = context.createGain();
    osc.type = "sine";
    osc.frequency.value = keysObject[key].freq;
    osc.start(0);
    gainNode.gain.setValueAtTime(0.25, context.currentTime); // attack
    gainNode.gain.linearRampToValueAtTime(0, context.currentTime + 2); // decay
    gainNodes[key] = gainNode;
    osc.connect(gainNodes[key]);
    gainNodes[key].connect(context.destination);
}

function mute(key) {
    gainNodes[key].gain.setValueAtTime(0, context.currentTime); // mute
}

document.addEventListener("keydown", function(e) {
    if (!e.repeat && findKey(e) == true) {
        play(e.key);
        el.style.filter = "invert(0.5)";
    }
})

document.addEventListener("keyup", function(e) {
    if (findKey(e) == true) {
        mute(e.key);
        el.style.filter = "invert(0)";
    }
})