const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config');

const app = express();

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({
        message: "We are home, do nothing!"
    })
});

const roomRoute = require('./routes/room');
app.use('/room', roomRoute)

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('DB connection successful');
})

app.listen(3000);