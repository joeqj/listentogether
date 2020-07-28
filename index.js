const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hello world"
    });
});

app.post('/insert', (req, res) => {
    console.log(req.body);
});

app.listen(5000, () => {
    console.log("Listenting on http://localhost:5000");
});