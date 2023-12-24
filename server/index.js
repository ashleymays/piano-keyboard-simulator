const express = require('express');
const path = require('path');
const cors = require('cors');
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
    const instrumentDirectoryPath = path.resolve(
      __dirname,
      './audio',
      instrument
    );
    const fileNames = await getAudioFileNames(instrumentDirectoryPath);
    const files = await getAudioFiles(fileNames, instrumentDirectoryPath);
    res.send(combineArraysToObject(fileNames, files));
  } catch (error) {
    throw error;
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Started server');
});
