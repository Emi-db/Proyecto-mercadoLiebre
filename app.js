const express = require("express");
const app = express ();
const path = require("path")

const publicPath = path.resolve(__dirname, "./Public");

app.use(express.static(publicPath))
app.listen(process.env.PORT || 3030, () => {
    console.log("server corriendo en puerto 3030")
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