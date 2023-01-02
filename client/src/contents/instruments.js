/*
    FILE: instruments.js
    PURPOSE: Define an object containing the name of each instrument and the icon associated with it.
        The title of each instrument should be the same as the title of the instrument's audio folder
        as it is used to get the audio for the instrument server-side.
*/

import pianoIcon from '../icons/piano-icon.png';
import gameControllerIcon from '../icons/game-controller-icon.png';
import keyboardIcon from '../icons/keyboard-icon.png';
import musicBoxIcon from '../icons/music-box-icon.png';

const instruments = [
    {
        title: 'Acoustic Grand',
        icon: pianoIcon
    },
    {
        title: 'Electric Piano',
        icon: keyboardIcon
    },
    {
        title: 'Music Box',
        icon: musicBoxIcon
    },
    {
        title: '8-Bit',
        icon: gameControllerIcon
    }
]

export default instruments;