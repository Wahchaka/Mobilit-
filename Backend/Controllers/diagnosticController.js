const diagnosticService = require("../Services/excelService")

async function saveDiagnosticController (req, res) {
    if(!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: "Aucune donnée reçue"
        })
    }
    try {
        await diagnosticService.saveDiagnostic(req.body)
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