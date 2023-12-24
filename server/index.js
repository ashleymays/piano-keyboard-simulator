const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const {
  getAudioFileNames,
  getAudioFiles,
  combineArraysToObject
} = require('./helpers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/audio/:instrument', async (req, res) => {
  try {
    const instrument = req.params.instrument;
    const instrumentDirectoryPath = resolve(__dirname, './audio', instrument);
    const fileNames = await getAudioFileNames(instrumentDirectoryPath);
    const files = await getAudioFiles(fileNames, instrumentDirectoryPath);
    res.status(200).send(combineArraysToObject(fileNames, files));
  } catch (error) {
    res.status(500).send(new Error('this is an error message'));
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Started server');
});
