const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = Schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamp: true }
);

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog;