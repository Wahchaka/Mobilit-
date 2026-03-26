const express = require("express");
const cors = require("cors");
const env = require("./.env");
const errorHandling = require("./Middlewares/errorsHandler")
const sequelize = require("./dataBase")

const app = express();

const port = env.EXPRESS_PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(errorHandling)

app.listen(port, () => {
    console.log(`Serveur lancer : http://localhost:${port}`)
})