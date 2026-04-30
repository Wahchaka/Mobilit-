const XLSX = require('xlsx')
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, "../data/ExcelFile.xlsx")

const dirPath = path.join(__dirname, "../data")
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

function saveDiagnostic(data) {   // data = ce que Angular vous envoie (form.value)
    let workbook    // Représente le fichier Excel entier
    let worksheet   // Représente un onglet dans ce fichier

    // Vérifie si le fichier Excel existe déjà sur le disque
    if (fs.existsSync(filePath)) {
        workbook = XLSX.readFile(filePath)          // Si oui, on l'ouvre
        worksheet = workbook.Sheets['Diagnostics']  // On récupère l'onglet nommé 'Diagnostics'
    }
    else {
        workbook = XLSX.utils.book_new()
        worksheet = XLSX.utils.aoa_to_sheet([
            ['Nom / prénom',
            'Date de naissance',
            'Age',
            'Situation',
            'Enfants',
            'Ville',
            'RQTH',
            'minima socio',
            'Niveau de formation',
            'Date de prescription',
            'Prescripteur',
            'structure',
            'raison',]
        ])
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Diagnostics')
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
        data.niveauDEtudes?.niveau8 ? "Niveau 8" : null
    ].filter(Boolean).join(", ")

    const situation = [
        data.situationFamiliale?.veuf ? "Veuf" : null,
        data.situationFamiliale?.divorcé ? "Divorcé" : null,
        data.situationFamiliale?.celib ? "Célibataire" : null,
        data.situationFamiliale?.marié ? "Marié" : null,
        data.situationFamiliale?.sansEnfant ? "0" : null,
        data.situationFamiliale?.enfantTexte ? data.situationFamiliale.enfantTexte : null
    ].filter(Boolean).join(", ")

    const structure = [
        data.AccompagnementSocial?.Département ? "Dpt" : null,
        data.AccompagnementSocial?.France_Travail ? "France Travail" : null,
        data.AccompagnementSocial?.CCAS ? "CCAS" : null,
        data.AccompagnementSocial?.Mission_locale ? "MILO" : null,
        data.AccompagnementSocial?.Autre_Texte ? data.AccompagnementSocial.Autre_Texte : null,
    ].filter(Boolean).join(", ")

    const newRow = [
        data.coordonnees?.nomPrenom,
        data.coordonnees?.dateNaissance,
        data.coordonnees?.age,
        situation,
        situation,
        data.coordonnees?.ville,
        data.sante.ouiRQTH ? "Oui" : "Non",
        minimasSocio,
        niveauEtude,
        data.infoDebut?.dateEtLieuDeLEntretien,
        data.infoDebut?.prescripteur,
        structure,
        data.infoDebut?.raison
    ]

    // origin: -1 signifie "ajoute après la dernière ligne existante"
    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { 
        origin: -1 
    })

    // Sauvegarde le fichier sur le disque (écrase l'ancien avec les nouvelles données)
    XLSX.writeFile(workbook, filePath)
}

module.exports = {
    saveDiagnostic
}