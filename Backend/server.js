const express = require("express");
const cors = require("cors");
const path = require("path")
const errorHandling = require("./Middlewares/errorsHandler")

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.static(path.join(__dirname, '../Frontend/dist/Frontend/browser')))

const diagnosticRoutes = require("./Routes/diagnosticRoutes")
const { exec } = require("child_process")
app.use("/diagnostic", diagnosticRoutes)

app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist/Frontend/browser/index.html'))
}) 

app.use(errorHandling)

app.listen(port, () => {
    console.log(`Serveur lancer : http://localhost:${port}`)
    exec(`start http://localhost:${port}`)
}) 