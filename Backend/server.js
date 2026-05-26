const express = require("express");
const cors = require("cors");
const env = require("./.env");
const errorHandling = require("./Middlewares/errorsHandler")

const app = express();

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(errorHandling)

const diagnosticRoutes = require("./Routes/diagnosticRoutes")

app.use("/diagnostic", diagnosticRoutes)

app.listen(port, () => {
    console.log(`Serveur lancer : http://localhost:${port}`)
})