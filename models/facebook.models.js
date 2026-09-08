const mongoose = require("mongoose");

const FacebookSchema = new mongoose.Schema({
    author: String,
    profileImageUrl: String,
    postDate: Date,
    content: String,
    hashtags: [String],
    imageUrl: String,
    likes: Number,
    comments: Number,
    shares: Number,

});

const Facebook = mongoose.model("Facebook", FacebookSchema);
module.exports = Facebook;