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
    ['s', "Db3"],
    ['x', "D3"],
    ['d', "Eb3"],
    ['c', "E3"],
    ['v', "F3"],
    ['g', "Gb3"],
    ['b', "G3"],
    ['h', "Ab3"],
    ['n', "A3"],
    ['j', "Bb3"],
    ['m', "B3"],
    [',', "C4"],
    ['l', "Db4"],
    ['.', "D4"],
    [';', "Eb4"],
    ['/', "E4"],
    ['q', "F4"],
    ['2', "Gb4"],
    ['w', "G4"],
    ['3', "Ab4"],
    ['e', "A4"],
    ['4', "Bb4"],
    ['r', "B4"],
    ['t', "C5"],
    ['6', "Db5"],
    ['y', "D5"],
    ['7', "Eb5"],
    ['u', "E5"],
    ['i', "F5"],
    ['9', "Gb5"],
    ['o', "G5"],
    ['0', "Ab5"],
    ['p', "A5"],
    ['-', "Bb5"],
    ['[', "B5"],
    [']', "C6"],
]);

let context = new (window.AudioContext || window.webkitAudioContext)();

// find the right pitch by the keyboard input
function isValidInput(input) {
    return keysMap.has(input) === true;
}


// load all audio files when page loads so that when the user presses keys the sounds start on time
// store buffers in array to access piano sounds when user presses a key
let buffers = [];
window.onload = function() {
    for (let i = 0; i < notes.length; ++i) {
    let request = new XMLHttpRequest();
    request.open("GET", "./audio/" + notes[i].id + ".mp3");
    request.responseType = "arraybuffer";
    request.onload = function() {
        let undecodedAudio = request.response;
        context.decodeAudioData(undecodedAudio, (data) => buffers[notes[i].id] = data)
    }
    request.send();
}}

let sounds = [];
function play(pitch) {
    let playSound = context.createBufferSource();
    playSound.buffer = buffers[pitch];    
    playSound.connect(context.destination);
    playSound.start(context.currentTime);
    sounds[pitch] = playSound;
}

function mute(pitch) {
    
}

// press key on keybaord -> play note
document.addEventListener("keydown", function(e) {
    // the pressed key is used for input in the piano -> play note
    // !e.repeat makes sure that only the first keydown event when holding down on a certain key is taken into account
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
    // the user is pressing down on the mouse and moving over the keys -> play the notes they're hovering over
    if (e.target.tagName == "BUTTON" && isDown === true) {
        play(e.target.id);
        e.target.style.filter = "invert(0.5)";
    }
})

document.getElementById("all-keys").addEventListener("mouseout", function(e) {
    // user moves mouse out of the piano -> change background of key to original color
    if (e.target.tagName == "BUTTON") {
        e.target.style.filter = "invert(0)";
    }
})

//  TODO: FIX BUG WHERE IT KEEPS PLAYING NOTES AFTER PRESSING THE KEY AND MOVING THE MOUSE
//  TODO: MAKE MUTE FUNCTION TO PLAY UNSUSTAINED NOTES
//  (?) TODO: RE-MAP KEYBOARD INPUTS