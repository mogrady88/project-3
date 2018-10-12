const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new Schema ({
    thread: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: String, required: true },
    comments: [{
        text: { type: String, required: true },
        author: {type: String, required: true },
        createdAt: {type: Date, default: Date.now }
    }]
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;