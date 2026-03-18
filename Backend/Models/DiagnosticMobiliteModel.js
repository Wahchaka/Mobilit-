const Sequelize = require("sequelize");
const db = require("./../dataBase")

const DiagnosticMobilite = db.define("DiagnosticMobilite", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Date_entretien: {
        type: Sequelize.DATE,
        validate: { notEmpty: true },
        allowNull: false
    },
    prescripteur: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    nom: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    nom_prenom: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        validate: { notEmpty: true },
        allowNull: false
    },
    codePostal: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    ville: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        set(value) {
            this.setDataValue('email', value.toLowerCase())
        }
    },
    interimaire: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cdd: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cdi: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    apprentissage: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    contratAider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    serviceCivique: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    codeObtenu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    finDeParcoursConduite: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    permisEtrangerNonValide: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    codeEnCours: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    permisB: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    permisAutres: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
}, {
    tableName: "diagnostic",
    timestamps: true
})

module.exports = DiagnosticMobilite