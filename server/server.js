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

    app.post('/audio', (req, res) => {
        const filePath = path.resolve(__dirname, "../client", "public", "audio", req.body.instrument);
        readFileTree(filePath, { encoding: "base64" }, (err, tree) => {
            if (err) throw err;
            res.json(tree)
        })
    })

    app.get('/recordings', (req, res) => {
        
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})