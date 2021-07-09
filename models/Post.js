const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    names: {
        type: String,
    },
    words: {
        type: String,
    }
})

module.exports = Post = mongoose.model("post", postSchema);
