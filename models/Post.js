const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    genre: {
        type: String,
    },  
    year: {
        type: String,
    },
    rating: {
        type: String,
    }
})

module.exports = Post = mongoose.model("post", postSchema);
