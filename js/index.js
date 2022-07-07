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
        for (let i in noteNames) {
            noteNames[i].style.fontSize = "1.7rem";
        }
    }
    else {
        for (let i in noteNames) {
            noteNames[i].style.fontSize = "0";
        }
    }
})

// press keys
let keyObject = {
    'z': {pitch: "C3"},
    'x': {pitch: "D3"},
    'c': {pitch: "E3"},
    'v': {pitch: "F3"},
    'b': {pitch: "G3"},
    'n': {pitch: "A3"},
    'm': {pitch: "B3"},
    ',': {pitch: "C4"},
    '.': {pitch: "D4"},
    '/': {pitch: "E4"},
    'q': {pitch: "F4"},
    'w': {pitch: "G4"},
    'e': {pitch: "A4"},
    'r': {pitch: "B4"},
    't': {pitch: "C5"},
    'y': {pitch: "D5"},
    'u': {pitch: "E5"},
    'i': {pitch: "F5"},
    'o': {pitch: "G5"},
    'p': {pitch: "A5"},
    '[': {pitch: "B5"},
    ']': {pitch: "C6"}
}

let pitch, el;
function findKey(e) {
    pitch = keyObject[e.key].pitch;
    el = document.querySelector('[value="' + pitch + '"]');
}

let keysDown = [];

document.addEventListener("keydown", function(e) {
    findKey(e);
    keysDown.push(el.value);
    el.style.background = "var(--pressed-key-color)";
})

document.addEventListener("keyup", function(e) {
    findKey(e);
    let index = keysDown.indexOf(el.value);
    keysDown.splice(index, 1);
    el.style.background = "revert";
})