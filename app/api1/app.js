const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const dbParams = {
    host: "db1",
    port: 5432,
    user: "postgres",
    password: "12345",
    database: "db"
}

const dbPool = new Pool(dbParams)

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    const header = { version: "API1 v1.0.0", info: "Welcome" }
    console.log("A user entered!")

    dbPool.query("SELECT * FROM usuarios").then(queryRes => {
        res.json({ header, data: queryRes.rows })
    }).catch(err => {
        console.log(err)
        res.json({ header })
    })
})

app.listen(8080, (req, res) => {
    console.log("Listening", 8080)
})