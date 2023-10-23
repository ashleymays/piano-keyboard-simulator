const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/audio', (req, res) => {
    console.log('get');
    res.send('get');
});

app.post('/audio', (req, res) => {
    console.log(req.body);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
