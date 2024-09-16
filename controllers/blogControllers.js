const Blog = require("../model/blog");

const blog_index = (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("blogs/index", { title: "Blogs", blogs: result });
        })
        .catch((err) => {
            console.log(err);
            res.render("404", { title: "404 Not Found" });
        });
};
const blog_create = (req, res) => {
    res.render("blogs/create", { title: "New blog" });
};
const blog_post = (req, res) => {
    const blog = Blog(req.body);
    blog.save()
        .then((result) => res.redirect("/blogs"))
        .catch((err) => {
            console.log(err);
        });
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render("blogs/details", { title: "Details", blog: result });
        })
        .catch((err) => {
            console.log(err);
            res.render("404", { title: "404 Not Found" });
        });
};
const blog_delete = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        if (result) {
          res.status(200).json({ redirect: '/blogs' });
        } else {
          res.status(404).json({ error: 'Blog not found' });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      });
};
module.exports = {
    blog_index,
    blog_create,
    blog_post,
    blog_details,
    blog_delete
};
