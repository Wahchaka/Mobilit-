const express = require('express')
const router = express.Router()
const diagnosticController = require("../Controllers/diagnosticController")

router.post("/save", diagnosticController.saveDiagnosticController)

module.exports = router