const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    names: {
        type: String,
    },
    words: {
        type: String,
    }
})

module.exports = newpost = mongoose.model("newpost", newSchema);