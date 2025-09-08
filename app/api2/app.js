const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.json({ version: "API2 v1.0.0", info: "Welcome to API2" })
})

app.listen(8080, (req, res) => {
    console.log("Listening", 8080)
})