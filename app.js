const express = require("express");
const app = express ();
const path = require("path")

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath))
app.listen(3030, () => {
    console.log("server corriendo")
})
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./Views/home.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./Views/register.html"))})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./Views/login.html"))})

    app.post("/register", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./Views/home.html"))
    })
    app.post("/login", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./Views/home.html"))
    })