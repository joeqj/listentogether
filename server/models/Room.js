const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    spotifyUserId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    joinLink: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Room', RoomSchema);