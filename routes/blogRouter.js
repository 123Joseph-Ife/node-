const express = require("express")
const router = express.Router();
const blogController = require("../controllers/blogControllers")

router.get("/", blogController.blog_index)

module.exports = router