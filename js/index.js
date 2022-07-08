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
    'z': {pitch: "C3", pressed: false, freq: 130.81},
    'x': {pitch: "D3", pressed: false, freq: 146.83},
    'c': {pitch: "E3", pressed: false, freq: 164.81},
    'v': {pitch: "F3", pressed: false, freq: 174.61},
    'b': {pitch: "G3", pressed: false, freq: 196.00},
    'n': {pitch: "A3", pressed: false, freq: 220.00},
    'm': {pitch: "B3", pressed: false, freq: 246.94},
    ',': {pitch: "C4", pressed: false, freq: 261.63},
    '.': {pitch: "D4", pressed: false, freq: 293.66},
    '/': {pitch: "E4", pressed: false, freq: 329.63},
    'q': {pitch: "F4", pressed: false, freq: 349.23},
    'w': {pitch: "G4", pressed: false, freq: 392.00},
    'e': {pitch: "A4", pressed: false, freq: 440.00},
    'r': {pitch: "B4", pressed: false, freq: 493.88},
    't': {pitch: "C5", pressed: false, freq: 523.25},
    'y': {pitch: "D5", pressed: false, freq: 587.33},
    'u': {pitch: "E5", pressed: false, freq: 659.25},
    'i': {pitch: "F5", pressed: false, freq: 698.46},
    'o': {pitch: "G5", pressed: false, freq: 783.99},
    'p': {pitch: "A5", pressed: false, freq: 880.00},
    '[': {pitch: "B5", pressed: false, freq: 987.77},
    ']': {pitch: "C6", pressed: false, freq: 1046.5},
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
    gainNode.gain.value = 0.15;
    gainNodes[key] = gainNode;
    osc.connect(gainNodes[key]);
    gainNodes[key].connect(context.destination);
}

function mute(key) {
    gainNodes[key].gain.value = 0;
}

document.addEventListener("keydown", function(e) {
    if (!e.repeat && findKey(e) == true) {
        keysObject[e.key].pressed = true;
        play(e.key);
        el.style.background = "var(--pressed-key-color)";
    }
})

document.addEventListener("keyup", function(e) {
    if (findKey(e) == true) {
        keysObject[e.key].pressed = false;
        mute(e.key);
        el.style.background = "revert";
    }
})