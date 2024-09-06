const express = require("express")
const app = express()
const _ = require("lodash")

const blogRouter = require("./routes/blogRouter")
app.listen(3000)

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.redirect("/blogs");
})

app.get("/about", (req, res) => {
  res.render("about", {title: "About"})
})
app.use("/blogs", blogRouter)

app.use((req, res) => {
  res.render("404", {title: "404 Not Found"})
})
