// Imports
const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

router.get('/', (req, res) => {
    res.json({
        message: "Room!"
    })
});

router.get('/create', (req, res) => {
    res.json({
        message: "Create!"
    })
});

router.post('/create', (req, res) => {
    const room = new Room({
        title: req.body.title,
        description: req.body.description,
        joinLink: req.body.joinLink
    });

    room.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({
                message: err
            })
        })
});

module.exports = router;