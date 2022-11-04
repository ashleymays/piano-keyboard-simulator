const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "../client", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})