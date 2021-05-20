// Imports
const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Get all Rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

// Get specific Room by id
router.get('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.json(room);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

// Create Room
router.get('/create', (req, res) => {
    res.json({
        message: "Create!"
    })
});

router.post('/create', async (req, res) => {
    const room = new Room({
        title: req.body.title,
        description: req.body.description,
        joinLink: req.body.joinLink
    });

    try {
        const savedRoom = await room.save();
        res.json(savedRoom);
    } catch (error) {
        res.json({
            message: error
        });
    }
    
});

// Update Room Details
router.patch('/:id', async (req, res) => {
    try {
        //! Todo: change _id to use spotify user id
        //! Todo: update all fields
        const roomUpdate = Room.updateOne({
            _id: req.params.id
        },
        {
            $set: {
                title: req.body.title
            }
        });
        res.json(roomUpdate);
    } catch (error) {
        res.json({
            message: error
        });
    }
})

// Delete Room
router.delete('/:id', async (req, res) => {
    try {
        //! Todo: change _id to use spotify user id
        const roomRemove = await Room.remove({
            _id: req.params.id
        });
        res.json(roomRemove);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

module.exports = router;