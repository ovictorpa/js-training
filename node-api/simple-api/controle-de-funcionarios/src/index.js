const express = require("express")
const routes = require("./routes")
const app = express()
const door = 8080
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

app.listen(door, () => console.log("🔥 Server ativo em http://localhost:8080 🔥"))

module.exports = app;