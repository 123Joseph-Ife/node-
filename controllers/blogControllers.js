const blog_index = (req, res) => {
    res.render("blogs/index", { title: "Blogs", data: [] });
};

module.exports = {
    blog_index,
};
