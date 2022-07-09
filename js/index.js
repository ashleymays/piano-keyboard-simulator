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





let notes = document.getElementsByClassName("note");

// Label Notes
document.getElementById("key-assist").addEventListener("click", function() {
    if (this.checked) {
        for (let i = 0; i < notes.length; ++i) {
            notes[i].style.fontSize = "1.65rem";
        }
    }
    else {
        for (let i = 0; i < notes.length; ++i) {
            notes[i].style.fontSize = "0";
        }
    }
})






// map keys with keyboard
let keysMap = new Map([
    ['z', "C3"],
    ['s', "C#3"],
    ['x', "D3"],
    ['d', "D#3"],
    ['c', "E3"],
    ['v', "F3"],
    ['g', "F#3"],
    ['b', "G3"],
    ['h', "G#3"],
    ['n', "A3"],
    ['j', "A#3"],
    ['m', "B3"],
    [',', "C4"],
    ['l', "C#4"],
    ['.', "D4"],
    [';', "D#4"],
    ['/', "E4"],
    ['q', "F4"],
    ['2', "F#4"],
    ['w', "G4"],
    ['3', "G#4"],
    ['e', "A4"],
    ['4', "A#4"],
    ['r', "B4"],
    ['t', "C5"],
    ['6', "C#5"],
    ['y', "D5"],
    ['7', "D#5"],
    ['u', "E5"],
    ['i', "F5"],
    ['9', "F#5"],
    ['o', "G5"],
    ['0', "G#5"],
    ['p', "A5"],
    ['-', "A#5"],
    ['[', "B5"],
    [']', "C6"],
]);

// audio stuff
let context = new (window.AudioContext || window.webkitAudioContext)();

// find the right pitch by the keyboard input
function isValidInput(input) {
    return keysMap.has(input) === true;
}

let gainNodes = [];
function play(pitch) {
    let osc = context.createOscillator();
    let gainNode = context.createGain();
    osc.type = "sine"
    osc.frequency.value = Tonal.Note.freq(pitch);
    osc.start();

    gainNode.gain.setValueAtTime(0.25, context.currentTime); // attack volume
    gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 5); // decay
    gainNodes[pitch] = gainNode; // store gain node to manipulate volume of key later (see mute function)
    
    osc.connect(gainNodes[pitch]);
    gainNodes[pitch].connect(context.destination);
}

function mute(pitch) {
    gainNodes[pitch].gain.setValueAtTime(gainNodes[pitch].gain.value, context.currentTime);
    gainNodes[pitch].gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.0275);
}

// press key on keybaord -> play note
document.addEventListener("keydown", function(e) {
    if (!e.repeat && isValidInput(e.key)) {
        play(keysMap.get(e.key));
        document.getElementById(keysMap.get(e.key)).style.filter = "invert(0.5)";
    }
})

// let go of key on keybaord -> stop playing note
document.addEventListener("keyup", function(e) {
    if (isValidInput(e.key)) {
        mute(keysMap.get(e.key));
        document.getElementById(keysMap.get(e.key)).style.filter = "invert(0)"
    }
})



// press key with mouse -> play note until they let go
let isDown;
document.activeElement.addEventListener("mousedown", function(e) {
    // user presses a piano key -> play the note and change the background color of the key
    if (e.target.tagName == "BUTTON") {
        play(e.target.id);
        e.target.style.filter = "invert(0.5)";
        isDown = true;
    }    
})

document.activeElement.addEventListener("mouseup", function(e) {
    // user lets go of a piano key -> mute the note and change the background color of the key
    if (e.target.tagName == "BUTTON") {
        mute(e.target.id);
        e.target.style.filter = "invert(0)";
        isDown = false;
    }
})

document.getElementById("all-keys").addEventListener("mouseover", function(e) {
    if (e.target.tagName == "BUTTON" && isDown === true) {
        play(e.target.id);
        e.target.style.filter = "invert(0.5)";
    }
})

document.getElementById("all-keys").addEventListener("mouseout", function(e) {
    if (e.target.tagName == "BUTTON") {
        e.target.style.filter = "invert(0)";
    }
})


//  TODO: FIX BUG WHERE THE FILTER STAYS ON AFTER PRESSING THE KEY AND MOVING THE MOUSE