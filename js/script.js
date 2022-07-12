let notes = document.getElementsByClassName("note");
let soften = document.getElementById("soften");
let sustain = document.getElementById("sustain");
let keyAssist = document.getElementById("key-assist");
let piano = document.getElementById("piano");
let context = new (window.AudioContext || window.webkitAudioContext)();
let keysMap = new Map([
    ['q', "C3"],
    ['2', "Db3"],
    ['w', "D3"],
    ['3', "Eb3"],
    ['e', "E3"],
    ['r', "F3"],
    ['5', "Gb3"],
    ['t', "G3"],
    ['6', "Ab3"],
    ['y', "A3"],
    ['7', "Bb3"],
    ['u', "B3"],
    ['i', "C4"],
    ['9', "Db4"],
    ['o', "D4"],
    ['0', "Eb4"],
    ['p', "E4"],
    ['[', "F4"],
    ['=', "Gb4"],
    [']', "G4"],
    ['a', "Ab4"],
    ['z', "A4"],
    ['s', "Bb4"],
    ['x', "B4"],
    ['c', "C5"],
    ['f', "Db5"],
    ['v', "D5"],
    ['g', "Eb5"],
    ['b', "E5"],
    ['n', "F5"],
    ['j', "Gb5"],
    ['m', "G5"],
    ['k', "Ab5"],
    [',', "A5"],
    ['l', "Bb5"],
    ['.', "B5"],
    ['/', "C6"],
]);

// load all audio files when page loads so that when the user presses keys the sounds start on time
// store buffers in array to access piano sounds when user presses a key
let buffers = [];
window.addEventListener("load", function() {
    for (let i = 0; i < notes.length; ++i) {
        let request = new XMLHttpRequest();
        request.open("GET", "./audio/" + notes[i].id + ".mp3");
        request.responseType = "arraybuffer";
        request.onload = function() {
            let undecodedAudio = request.response;
            context.decodeAudioData(undecodedAudio, (data) => buffers[notes[i].id] = data)
        }
    request.send();
    }
})

function isValidInput(input) {
    // find the right pitch by the keyboard input
    return keysMap.has(input) === true;
}

function playNote(pitch) {
    let playSound = context.createBufferSource();
    let gainNode = context.createGain();
    playSound.buffer = buffers[pitch];  

    if (soften.checked === true) {
        gainNode.gain.setValueAtTime(0.4, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.85, context.currentTime + 0.35);
    }
    else {
        gainNode.gain.setValueAtTime(1.5, context.currentTime);
    }

    playSound.connect(gainNode);
    gainNode.connect(context.destination);
    playSound.start(context.currentTime);

    if (sustain.checked === false) {
        gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 3);
    }
}

// Keyboard Input
document.addEventListener("keydown", function(e) {
    // the pressed key is used for input in the piano -> play note
    // !e.repeat makes sure that only the first keydown event when holding down on a certain key is taken into account
    if (!e.repeat && isValidInput(e.key)) {
        let pitch = keysMap.get(e.key);
        playNote(pitch);
        document.getElementById(pitch).classList.add("key-bkg-color"); // change color of key
    }
})

document.addEventListener("keyup", function(e) {
    let pitch = keysMap.get(e.key);
    document.getElementById(pitch).classList.remove("key-bkg-color"); // change color of key
})

// Mouse Input
let isDown;
document.activeElement.addEventListener("mousedown", function(e) {
    if (e.target.tagName === "BUTTON") {
        playNote(e.target.id);
        e.target.classList.add("key-bkg-color");
        isDown = true;
    }    
})

document.activeElement.addEventListener("mouseup", function(e) {
    e.target.classList.remove("key-bkg-color");
    isDown = false;
})

piano.addEventListener("mouseover", function(e) {
    if (e.target.tagName == "BUTTON" && isDown === true) {
        playNote(e.target.id);
        e.target.classList.add("key-bkg-color");
    }
})

piano.addEventListener("mouseout", function(e) {
    e.target.classList.remove("key-bkg-color");
})




// Label Notes
keyAssist.addEventListener("click", function() {
    if (this.checked) {
        for (let i = 0; i < notes.length; ++i) {
            notes[i].style.fontSize = "1.8rem";
        }
    }
    else {
        for (let i = 0; i < notes.length; ++i) {
            notes[i].style.fontSize = "0";
        }
    }
})




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