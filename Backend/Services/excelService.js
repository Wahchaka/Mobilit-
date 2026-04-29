const XLSX = require('xlsx')       // Importe la librairie SheetJS pour manipuler les fichiers Excel
const path = require('path')       // Importe le module Node.js pour gérer les chemins de fichiers
const fs = require('fs')           // Importe le module Node.js pour lire/écrire sur le disque

// Construit le chemin absolu vers votre fichier Excel
// __dirname = le dossier où se trouve ce fichier JS
// "../data/ExcelFile.xlsx" = remonte d'un dossier puis va dans data/
const filePath = path.join(__dirname, "../data/ExcelFile.xlsx")

const dirPath = path.join(__dirname, "../data")  // Chemin vers le dossier "data"
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)  // Crée le dossier "data" s'il n'existe pas déjà
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
        workbook = XLSX.utils.book_new()   // Si non, on crée un nouveau fichier Excel vide
        worksheet = XLSX.utils.aoa_to_sheet([
            // aoa = "array of arrays", ici vous définissez la ligne d'en-tête
            // C'est ici que vous mettez les noms de vos colonnes
            // Exemple : ['Nom', 'Prénom', 'Email', ...]
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
        // Ajoute l'onglet au fichier en le nommant 'Diagnostics'
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
        data.AccompagnementSocial?.Département ? "Département" : null,
        data.AccompagnementSocial?.France_Travail ? "France Travail" : null,
        data.AccompagnementSocial?.CCAS ? "CCAS" : null,
        data.AccompagnementSocial?.Mission_locale ? "MILO" : null,
        data.AccompagnementSocial?.Autre_Texte ? data.AccompagnementSocial.Autre_Texte : null,
    ].filter(Boolean).join(", ")

    const newRow = [
        // C'est ici que vous mettez les valeurs à insérer
        // L'ordre doit correspondre exactement à l'ordre des colonnes définies au-dessus
        // Exemple : data.coordonnees.nomPrenom, data.coordonnees.email, ...
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

    // Ajoute la nouvelle ligne à la fin du tableau
    // origin: -1 signifie "ajoute après la dernière ligne existante"
    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 })

    // Sauvegarde le fichier sur le disque (écrase l'ancien avec les nouvelles données)
    XLSX.writeFile(workbook, filePath)
}

module.exports = {
    saveDiagnostic   // Exporte la fonction pour pouvoir l'utiliser dans le controller
}