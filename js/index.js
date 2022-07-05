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

// Label Notes
let noteNames = document.getElementsByClassName("note-name");
document.getElementById("label-notes").addEventListener("click", function() {
    if (this.checked) {
        for (let i in noteNames) {
            noteNames[i].style.fontSize = "1.5rem";
        }
    }
    else {
        for (let i in noteNames) {
            noteNames[i].style.fontSize = "0";
        }
    }
})

// Audio
