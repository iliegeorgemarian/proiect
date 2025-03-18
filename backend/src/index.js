const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.send({ message: `Salutare, ${req.headers['x-forwarded-for'] }`})
})

app.listen(80)