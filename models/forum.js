const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema ({

});

const Forum = mongoose.Model("Forum", forumSchema);

module.exports = Forum;