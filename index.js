const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('flappy')
})

app.listen(3000, (req, res) => {
    console.log("Server is running...")
})