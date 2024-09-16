const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRouter = require("./routes/blogRouter");

const port = 3000;

const dbURI =
    "mongodb+srv://ifeoluwa:ifeoluwa@nodetuts.druvw.mongodb.net/node_tuts?retryWrites=true&w=majority&appName=nodetuts";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose
    .connect(dbURI)
    .then(() =>
        app.listen(port, () => {
            console.log(`server started on port ${port}`);
        })
    )
    .catch((err) => {
        console.log(err);
    });

app.use(morgan("dev"));

mongoose;

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.use("/blogs", blogRouter);

app.use((req, res) => {
    res.render("404", { title: "404 Not Found" });
});
