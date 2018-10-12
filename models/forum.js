const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema ({
    thread: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    author: { type: String, required: true },
    comments: [{
        text: { type: String, required: true },
        author: {type: String, required: true },
        createdAt: {type: Date, default: Date.now }
    }]
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;