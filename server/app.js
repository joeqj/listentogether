const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const cookieParser = require('cookie-parser');

require('dotenv/config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.json({
        message: "We are home, do nothing!"
    })
});

const roomRoute = require('./routes/rooms');
app.use('/rooms', roomRoute);

const userRoute = require('./routes/user');
app.use('/user', userRoute)

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('DB connection successful');
})

app.listen(3333);