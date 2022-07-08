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


// TODO: GET TONAL.JS, ADD FUNCTION TO GET FREQUENCY OF NOTE BY VALUE, CREATE MAP WITH (KEY: KEYBOARD_INPUT, VALUE: NOTE_VALUE (E.G. C4))
// IN KEYBOARD EVENT LISTENER, IF THE INPUT EXISTS IN THE MAP, GET THE VALUE AND PASS IT INTO PLAY AND MUTE FUNCTIONS
// FREQUENCY PART IN PLAY FUNCTION WILL USE TONAL.JS'S FREQ METHOD INSTEAD OF 'keysObject[pitch].freq'




// map keys with keyboard
let keysMap = new Map([
    ['z', "C3"],
    ['s', "C#3"],
    ['x', "D3"],
    ['d', "D#3 "],
    ['c', "E3 "],
    ['v', "F3 "],
    ['g', "F#3 "],
    ['b', "G3 "],
    ['h', "G#3 "],
    ['n', "A3 "],
    ['j', "A#3 "],
    ['m', "B3 "],
    [',', "C4 "],
    ['l', "C#4 "],
    ['.', "D4 "],
    [';', "D#4 "],
    ['/', "E4 "],
    ['q', "F4 "],
    ['2', "F#4 "],
    ['w', "G4 "],
    ['3', "G#4 "],
    ['e', "A4 "],
    ['4', "A#4 "],
    ['r', "B4 "],
    ['t', "C5 "],
    ['6', "C#5 "],
    ['y', "D5 "],
    ['7', "D#5 "],
    ['u', "E5 "],
    ['i', "F5 "],
    ['9', "F#5 "],
    ['o', "G5 "],
    ['0', "G#5 "],
    ['p', "A5 "],
    ['-', "A#5 "],
    ['[', "B5 "],
    [']', "C6 "],
]);

// audio stuff
let context = new (window.AudioContext || window.webkitAudioContext)();
let el;

// find the right pitch by the keyboard input
function isValidInput(input) {
    return keysMap.has(input) === true;
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
    if (!e.repeat && isValidInput(e.key)) {
        let note = keysMap.get(e.key);
        play(note);
        el.style.filter = "invert(0.5)"; // change color of key in piano
    }
})

// let go of key on keybaord -> stop playing note
document.addEventListener("keyup", function(e) {
    if (isValidKey(e.key)) {
        let note = keysMap.get(e.key);
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