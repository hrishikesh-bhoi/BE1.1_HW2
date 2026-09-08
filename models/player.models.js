const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    age: Number,
    gender: [String],
    country: String,
    isActive: {
        type: Boolean,
        default: true,
    },
    gamesPlayed: Number,
    level: [String],
    preferredGame: String,
    
}, 
{
    timestamps: true,
},
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;