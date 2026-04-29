const express = require('express')
const router = express.Router()
const { saveDiagnosticController } = require("../Controllers/diagnosticController")

router.post("/save", saveDiagnosticController)

module.exports = router