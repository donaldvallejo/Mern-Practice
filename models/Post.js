const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },  
})

module.exports = Post = mongoose.model("post", postSchema);
