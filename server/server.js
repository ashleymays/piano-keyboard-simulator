const express = require('express');
const path = require('path');
const cors = require('cors');
const readFileTree = require('read-file-tree');
const connection = require('./db');
const app = express();

app.use(cors())
app.use(express.static(path.resolve(__dirname, "../client", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


connection.connect((err) => {
    if (err) throw err;

    console.log('Connected to database');

    // Get audio files for a certain instrument from the directory
    app.post('/audio', (req, res) => {
        const filePath = path.resolve(__dirname, "../client", "public", "audio", req.body.instrument);
        readFileTree(filePath, { encoding: "base64" }, (err, tree) => {
            if (err) throw err;
            res.json(tree)
        })
    })


    // Add a recording to the database
    app.post('/recording', (req, res) => {
        let filePath = path.resolve(__dirname, '../client/public/userAudio', req.body.title + '.mp3');
        let recordingTitle = req.body.title;
        let sql = `INSERT INTO RECORDINGS (TITLE, FILEPATH)
                   VALUES ('${recordingTitle}', '${filePath}')`

        console.log(req.body.fileData)
        res.json({})
        
        // connection.query(sql, (err, results, fields) => {
        //     if (err) throw err;
        //     res.json(req.body);
        // })
    })

    // Get all recordings from a database
    app.get('/recording', (req, res) => {
        let sql = `SELECT * FROM RECORDINGS`;
        connection.query(sql, (err, results, fields) => {
            if (err) throw err;
            res.json(results);
        })
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})