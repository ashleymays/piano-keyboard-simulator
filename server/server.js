const express = require('express');
const path = require('path');
const cors = require('cors');
const { readdir, readFile } = require('fs');
const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client', 'build')));
app.use(express.static(path.resolve(__dirname, '../client', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/audio', (req, res) => {
    const instrument = req.body.instrument;
    const instrumentAudioFilePath = path.resolve(__dirname, './audio', instrument);

    readdir(instrumentAudioFilePath, (error, audioFileNames) => {
        if (error) throw error;

        const audioFiles = {};
        const encoding = 'base64';
        let audioPitchFilePath;
        let isLastAudioFile;

        audioFileNames.forEach((audioFileName, index) => {
            audioPitchFilePath = path.resolve(instrumentAudioFilePath, audioFileName);

            readFile(audioPitchFilePath, encoding, (error, audio) => {
                if (error) throw error;
                audioFiles[audioFileName] = audio;
                isLastAudioFile = index === audioFileNames.length - 1;
                if (isLastAudioFile) {
                    res.send(audioFiles);
                }
            });
        });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
