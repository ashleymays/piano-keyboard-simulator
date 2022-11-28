let piano = document.getElementById("piano");
let body = document.querySelector("body");
let instrument = 'Acoustic Grand';
let context = new (window.AudioContext || window.webkitAudioContext)();
let keysMap = new Map ([
    ['q', { noteName: "C", octave: 3 }],
    ['2', { noteName: "Db", octave: 3 }],
    ['w', { noteName: "D", octave: 3 }],
    ['3', { noteName: "Eb", octave: 3 }],
    ['e', { noteName: "E", octave: 3 }],
    ['r', { noteName: "F", octave: 3 }],
    ['5', { noteName: "Gb", octave: 3 }],
    ['t', { noteName: "G", octave: 3 }],
    ['6', { noteName: "Ab", octave: 3 }],
    ['y', { noteName: "A", octave: 3 }],
    ['7', { noteName: "Bb", octave: 3 }],
    ['u', { noteName: "B", octave: 3 }],
    ['i', { noteName: "C", octave: 4 }],
    ['9', { noteName: "Db", octave: 4 }],
    ['o', { noteName: "D", octave: 4 }],
    ['0', { noteName: "Eb", octave: 4 }],
    ['p', { noteName: "E", octave: 4 }],
    ['[', { noteName: "F", octave: 4 }],
    ['=', { noteName: "Gb", octave: 4 }],
    [']', { noteName: "G", octave: 4 }],
    ['a', { noteName: "Ab", octave: 4 }],
    ['z', { noteName: "A", octave: 4 }],
    ['s', { noteName: "Bb", octave: 4 }],
    ['x', { noteName: "B", octave: 4 }],
    ['c', { noteName: "C", octave: 5 }],
    ['f', { noteName: "Db", octave: 5 }],
    ['v', { noteName: "D", octave: 5 }],
    ['g', { noteName: "Eb", octave: 5 }],
    ['b', { noteName: "E", octave: 5 }],
    ['n', { noteName: "F", octave: 5 }],
    ['j', { noteName: "Gb", octave: 5 }],
    ['m', { noteName: "G", octave: 5 }],
    ['k', { noteName: "Ab", octave: 5 }],
    [',', { noteName: "A", octave: 5 }],
    ['l', { noteName: "Bb", octave: 5 }],
    ['.', { noteName: "B", octave: 5 }],
    ['/', { noteName: "C", octave: 6 }],
]);
let pitches = ["A1", "A2", "A3","A4","A5","A6","A7",
"B1", "B2", "B3","B4","B5","B6","B7",
"C1", "C2", "C3","C4","C5","C6","C7", "C8",
"D1", "D2", "D3","D4","D5","D6","D7",
"E1", "E2", "E3","E4","E5","E6","E7",
"F1", "F2", "F3","F4","F5","F6","F7",
"G1", "G2", "G3","G4","G5","G6","G7",
"Bb1", "Bb2", "Bb3","Bb4","Bb5","Bb6","Bb7",
"Db1", "Db2", "Db3","Db4","Db5","Db6","Db7",
"Eb1", "Eb2", "Eb3","Eb4","Eb5","Eb6","Eb7",
"Ab1", "Ab2", "Ab3","Ab4","Ab5","Ab6","Ab7",
"Gb1", "Gb2", "Gb3","Gb4","Gb5","Gb6","Gb7",];



// Record Audio Files
let recordingWindow = document.getElementById("recording-window");
let recordingTitle = document.getElementById("recording-title");
let downloadBtn = document.getElementById("download-btn");
let recordBtn = document.querySelector("#record-btn + span");
let dest = context.createMediaStreamDestination();
let mediaRecorder = new MediaRecorder(dest.stream);

recordBtn.addEventListener("click", function() {
    if (recordBtn.className == "record-off") {
        // change button look
        recordBtn.classList.remove("record-off");
        recordBtn.classList.add("record-on")
        recordBtn.innerHTML = "Stop";

        // start recording
        mediaRecorder.start();
    }
    else {
        // change button look
        recordBtn.classList.remove("record-on");
        recordBtn.classList.add("record-off")
        recordBtn.innerHTML = "Record";

        // end recording
        mediaRecorder.stop();
        console.log(mediaRecorder)
    }
})

let url;
let data;
let blob;
let overlay = document.getElementById("overlay");
mediaRecorder.addEventListener('dataavailable', function(e) {
    data = [e.data];
    blob = new Blob(data, { type: 'audio/mp3' });
    url = URL.createObjectURL(blob);

    // open recording window and fade out background
    recordingWindow.removeAttribute("class", "disabled");
    overlay.setAttribute("class", "overlay");
})

recordingWindow.addEventListener("submit", function(e) {
    // check if recording title is valid (no periods)
    if (isValidTitle()) {
        overlay.removeAttribute("class", "overlay");
        recordingWindow.setAttribute("class", "disabled");
        download(url);
    }
    e.preventDefault();
})

function isValidTitle() {
    let res = recordingTitle.value.indexOf('.');
    if (res !== -1) {
        alert("Invalid character: \".\" \nPlease enter a different title.");
        return false;
    }
    return true;
}

function download(url) {
    let link = document.createElement("a");
    link.setAttribute("download", recordingTitle.value);
    link.setAttribute("href", url);
    link.click();
}



// Get Audio Files
let buffers = [];
function loadAudioFiles() {
    for (let i in pitches) {
        let request = new XMLHttpRequest();
        request.open("GET", `./audio/${instrument}/${pitches[i]}.mp3`);
        request.responseType = "arraybuffer";
        request.onload = function() {
            let undecodedAudio = request.response;
            context.decodeAudioData(undecodedAudio, (data) => buffers[pitches[i]] = data)
        }
        request.send();
    }
}

window.addEventListener("load", loadAudioFiles())


// Play note
let soften = document.getElementById("soften");
let sustain = document.getElementById("sustain");
let keyAssist = document.getElementById("key-assist");
function playNote(pitch) {
    let playSound = context.createBufferSource();
    let gainNode = context.createGain();
    playSound.buffer = buffers[pitch];  

    // Soften
    if (soften.checked === true) {
        gainNode.gain.setValueAtTime(0.75, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(1.25, context.currentTime + 0.2);
    }
    else {
        gainNode.gain.setValueAtTime(1.5, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + sustainedDecay());
    }
    if (sustain.checked === false) {
        gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 2.5);
    }

    playSound.connect(gainNode);
    gainNode.connect(dest);
    gainNode.connect(context.destination);
    playSound.start(context.currentTime);
}

function sustainedDecay() {
    switch(instrument) {
        case "Acoustic Grand": return 10;
        case "Electric Piano": return 8;
        case "Music Box": return 8.5;
        case "Harp": return 13;
    }
}


// Keyboard Input
var currentlyPressedKeys = [];
function isValidInput(input) {
    return keysMap.has(input) === true;
}
function getPitch(input) {
    return keysMap.get(input).noteName + JSON.stringify(keysMap.get(input).octave);
}
document.addEventListener("keydown", function(e) {
    let key = e.key.toLowerCase();

    // play note if the recording window isn't open and the input is valid
    if (recordingWindow.className === "disabled" && isValidInput(key) && !currentlyPressedKeys.includes(key)) {
        let pitch = getPitch(key);
        playNote(pitch);
        document.getElementsByClassName(key)[0].classList.add("key-bkg-color");
        currentlyPressedKeys.push(key);
    }
})
document.addEventListener("keyup", function(e) {
    let key = e.key.toLowerCase();

    if (isValidInput(key) && document.getElementsByClassName(key)[0]) {
        let pitch = getPitch(key);
        document.getElementsByClassName(key)[0].classList.remove("key-bkg-color");
    }
    currentlyPressedKeys = currentlyPressedKeys.filter((pressedKey) => pressedKey != key);
})



// Touch Input
let isTouched = false;
document.addEventListener("touchstart", function(e) {
    isTouched = true;
    let keyboardKey = e.target.innerHTML;
    if (recordingWindow.className === "disabled" && e.target.name === "piano-key" && !currentlyPressedKeys.includes(keyboardKey)) {
        let pitch = getPitch(keyboardKey);
        playNote(pitch);
        e.target.classList.add("key-bkg-color");
        currentlyPressedKeys.push(keyboardKey);
    }
})
document.addEventListener("touchend", function(e) {
    let keyboardKey = e.target.innerHTML;
    e.target.classList.remove("key-bkg-color");
    currentlyPressedKeys = currentlyPressedKeys.filter((pressedKey) => pressedKey != keyboardKey);
})




// Mouse Input
let isDown;
document.activeElement.addEventListener("mousedown", function(e) {
    if (!isTouched && e.target.name === "piano-key") {
        let keyboardKey = e.target.innerHTML;
        let pitch = getPitch(keyboardKey);
        playNote(pitch);
        e.target.classList.add("key-bkg-color");
        isDown = true;
    }
})
document.activeElement.addEventListener("mouseup", function(e) {
    e.target.classList.remove("key-bkg-color");
    isDown = false;
})

// Glissando
piano.addEventListener("mouseover", function(e) {
    if (e.target.name == "piano-key" && isDown === true) {
        let keyboardKey = e.target.innerHTML;
        let pitch = getPitch(keyboardKey);
        playNote(pitch);
        e.target.classList.add("key-bkg-color");
    }
})
piano.addEventListener("mouseout", function(e) {
    e.target.classList.remove("key-bkg-color");
})




// Label Notes
let pianoKeysList = document.getElementsByName("piano-key");
keyAssist.addEventListener("click", function() {
    if (this.checked) {
        for (let i = 0; i < pianoKeysList.length; ++i) {
            pianoKeysList[i].style.fontSize = "2.25rem";
        }
    }
    else {
        for (let i = 0; i < pianoKeysList.length; ++i) {
            pianoKeysList[i].style.fontSize = "0";
        }
    }
})




// Select Drop Down
let selected = document.getElementById("selected");
let instrumentOptions = document.getElementById("instrument-options");
let canDoubleClick = true;
body.addEventListener("click", function(e) {
    // open the select box when clicked
    if (e.target.id === 'selected' && canDoubleClick) {
        instrumentOptions.style.display = "block";
        canDoubleClick = false;
    }
    else {
        // user chose an instrument -> get new instrument sounds
        if (e.target.name == 'instrument') {
            selected.innerHTML = e.target.value;
            instrument = e.target.value;
            loadAudioFiles();
        }
        // close select box
        instrumentOptions.style.display = "none";
        canDoubleClick = true;
    }
})



// Switch between octaves
let octaveDownBtn = document.getElementById("octave-down-btn");
let octaveUpBtn = document.getElementById("octave-up-btn");
let octaveRange = document.getElementById("octave-range");
let firstKey = keysMap.get('q'); // lowest pitch on mini keyboard
let lastKey = keysMap.get('/'); // highest pitch on mini keyboard

octaveDownBtn.addEventListener("click", function() {
    // shift octaves down 1; can't go past C1
    if (firstKey.octave > 1) {
        keysMap.forEach(function(value, key, keysMap) {
            --value.octave;
        })
        displayOctaveRange();
    }
})

octaveUpBtn.addEventListener("click", function() {
    // shift octaves up 1; can't go past C8
    if (lastKey.octave < 8) {
        keysMap.forEach(function(value, key, keysMap) {
            ++value.octave;
        })
        displayOctaveRange();
    }
})
function displayOctaveRange() {
    octaveRange.innerHTML = `C${firstKey.octave} - C${lastKey.octave}`;
}