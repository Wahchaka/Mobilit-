const diagnosticService = require("../Services/excelService")

const saveDiagnosticController = (req, res) => {
    try {
        diagnosticService.saveDiagnostic(req.body)
        res.status(200).json({ 
            message: "Diagnostic sauvegardé avec succès" 
        })
    } 
    catch (error) {
        console.error("Erreur lors de la sauvegarde du diagnostic :", error)
        res.status(500).json({ 
            message: "Erreur lors de la sauvegarde du diagnostic" 
        })
    }
}

module.exports = {
    saveDiagnosticController
}