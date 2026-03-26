const Sequelize = require("sequelize")
const env = require("./.env")

const sequelize = new Sequelize(env.DATABASE, env.USER, env.PASSWORD, {
    host: env.HOST,
    dialect: env.DIALECT,
    operatorsAliases: env.OPERATORSALIASES,

    pool: {
        max: env.MAX,
        min: env.MIN,
        acquire: env.ACQUIRE,
        idle: env.IDLE
    }
})

sequelize.authenticate()
    .then(() => console.log("Base de données connectée."))
    .catch(err => console.log("Erreur lors de la connection à la base de données :", err))

module.exports = sequelize