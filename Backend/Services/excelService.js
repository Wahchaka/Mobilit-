const ExcelJS = require('exceljs')
const path = require('path')
const fs = require('fs')
const os = require('os')

const currentYear = new Date().getFullYear()
const FILE_NAME = `Suivi ${currentYear} Quentyn.xlsx`
const filePath = path.join(os.homedir(), 'Desktop', FILE_NAME)

const HEADERS = [
    'Nom / prénom', 'Date de naissance', 'Age', 'Situation', 'Enfants',
    'Ville', 'RQTH', 'Minima sociaux', 'Niveau de formation', 'Niveau FR',
    'Date de prescription', 'Prescripteur', 'Structure', 'Raison'
]

async function saveDiagnostic(data) {
    const workbook = new ExcelJS.Workbook()

    if (fs.existsSync(filePath)) {
        // Lit le fichier existant EN PRÉSERVANT tout le formatage
        await workbook.xlsx.readFile(filePath)
    }

    let worksheet = workbook.getWorksheet('Diagnostics')

    if (!worksheet) {
        // Création de l'onglet + en-têtes seulement si il n'existe pas encore
        worksheet = workbook.addWorksheet('Diagnostics')

        const headerRow = worksheet.addRow(HEADERS)
        headerRow.eachCell(cell => {
            cell.font = { bold: true }
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { 
                    argb: 'FFD9E1F2' 
                }
            }
        })
    }

    const minimasSocio = [
        data.ressource?.salaire ? "Salaire" : null,
        data.ressource?.rsa ? "RSA" : null,
        data.ressource?.ass ? "ASS" : null,
        data.ressource?.are ? "ARE" : null,
        data.ressource?.aah ? "AAH" : null,
        data.ressource?.sans ? "Sans" : null,
    ].filter(Boolean).join(", ")

    const niveauEtude = [
        data.niveauDEtudes?.etranger ? "Étranger" : null,
        data.niveauDEtudes?.niveau3 ? "Niveau 3" : null,
        data.niveauDEtudes?.niveau4 ? "Niveau 4" : null,
        data.niveauDEtudes?.niveau5 ? "Niveau 5" : null,
        data.niveauDEtudes?.niveau6 ? "Niveau 6" : null,
        data.niveauDEtudes?.niveau7 ? "Niveau 7" : null,
        data.niveauDEtudes?.niveau8 ? "Niveau 8" : null,
    ].filter(Boolean).join(", ")

    const frLvl = [
        data.niveauDeFrancais?.faible ? "Faible" : null,
        data.niveauDeFrancais?.moyen ? "Moyen" : null,
        data.niveauDeFrancais?.elever ? "Élever" : null
    ].filter(Boolean).join(", ")

    const situation = [
        data.situationFamiliale?.veuf ? "Veuf" : null,
        data.situationFamiliale?.divorcé ? "Divorcé" : null,
        data.situationFamiliale?.celib ? "Célibataire" : null,
        data.situationFamiliale?.marié ? "Marié" : null,
    ].filter(Boolean).join(", ")

    const enfants = data.situationFamiliale?.sansEnfant ? "0" : data.situationFamiliale?.enfantTexte ?? ""

    const structure = [
        data.AccompagnementSocial?.Département ? "Dpt" : null,
        data.AccompagnementSocial?.France_Travail ? "France Travail" : null,
        data.AccompagnementSocial?.CCAS ? "CCAS" : null,
        data.AccompagnementSocial?.Mission_locale ? "MILO" : null,
        data.AccompagnementSocial?.Autre_Texte ?? null,
    ].filter(Boolean).join(", ")

    worksheet.addRow([
        data.coordonnees?.nomPrenom,
        data.coordonnees?.dateNaissance,
        data.coordonnees?.age,
        situation,
        enfants,
        data.coordonnees?.ville,
        data.sante?.ouiRQTH ? "Oui" : "Non",
        minimasSocio,
        niveauEtude,
        frLvl,
        data.InfoDebut?.dateEtLieuDeLEntretien,
        data.InfoDebut?.prescripteur,
        structure,
        data.InfoDebut?.raison
    ])

    await workbook.xlsx.writeFile(filePath)
}

module.exports = { 
    saveDiagnostic 
}