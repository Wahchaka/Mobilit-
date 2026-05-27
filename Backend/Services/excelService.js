const ExcelJS = require('exceljs')
const path = require('path')
const fs = require('fs')
const os = require('os')

const currentYear = new Date().getFullYear()
let FILE_NAME

if (currentYear === 2026) {
    FILE_NAME = `Suivi ${currentYear} Quentyn.xlsx`
}
else {
    FILE_NAME = `Suivi ${currentYear}.xlsx`
}

const filePath = path.join(os.homedir(), 'Desktop', FILE_NAME)

const header = [
    'Nom / prénom', 'Date de naissance', 'Age', 'Situation', 'Enfants',
    'Ville', 'RQTH', 'Minima sociaux', 'Niveau de formation', 'Niveau FR',
    'Date de prescription', 'Prescripteur', 'Structure', 'Raison'
]

// "data" contient toutes les données remplies dans le formulaire
async function saveDiagnostic(data) {

    const workbook = new ExcelJS.Workbook() // Crée un objet qui représente le fichier Excel entier

    // Si le fichier Excel existe déjà sur le Bureau, on le charge pour ne pas l'écraser
    if (fs.existsSync(filePath)) {
        await workbook.xlsx.readFile(filePath) // Charge le fichier existant
    }

    // Cherche l'onglet "Diagnostics" dans le fichier
    let worksheet = workbook.getWorksheet('Diagnostics')

    // Si l'onglet n'existe pas encore, on le crée
    if (!worksheet) {
        worksheet = workbook.addWorksheet('Diagnostics')

        // Ajoute la ligne d'en-tête (les noms des colonnes)
        const headerRow = worksheet.addRow(header)

        // Met en forme chaque cellule de l'en-tête
        headerRow.eachCell(cell => {
            cell.font = { 
                bold: true 
            }
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { 
                    argb: 'FFD9E1F2' 
                }
            }
        })
    }

    // On construit une liste des ressources cochées dans le formulaire
    const minimasSocioListe = []
    if (data.ressource && data.ressource.salaire) { minimasSocioListe.push("Salaire") }
    if (data.ressource && data.ressource.rsa) { minimasSocioListe.push("RSA") }
    if (data.ressource && data.ressource.ass) { minimasSocioListe.push("ASS") }
    if (data.ressource && data.ressource.are) { minimasSocioListe.push("ARE") }
    if (data.ressource && data.ressource.aah) { minimasSocioListe.push("AAH") }
    if (data.ressource && data.ressource.sans) { minimasSocioListe.push("Sans") }
    const minimasSocio = minimasSocioListe.join(", ")

    const niveauEtudeListe = []
    if (data.niveauDEtudes && data.niveauDEtudes.etranger) { niveauEtudeListe.push("Étranger") }
    if (data.niveauDEtudes && data.niveauDEtudes.niveau3) { niveauEtudeListe.push("Niveau 3") }
    if (data.niveauDEtudes && data.niveauDEtudes.niveau4) { niveauEtudeListe.push("Niveau 4") }
    if (data.niveauDEtudes && data.niveauDEtudes.niveau5) { niveauEtudeListe.push("Niveau 5") }
    if (data.niveauDEtudes && data.niveauDEtudes.niveau6) { niveauEtudeListe.push("Niveau 6") }
    if (data.niveauDEtudes && data.niveauDEtudes.niveau7) { niveauEtudeListe.push("Niveau 7") }
    if (data.niveauDEtudes && data.niveauDEtudes.niveau8) { niveauEtudeListe.push("Niveau 8") }
    const niveauEtude = niveauEtudeListe.join(", ")

    const frLvlListe = []
    if (data.niveauDeFrancais && data.niveauDeFrancais.faible) { frLvlListe.push("Faible") }
    if (data.niveauDeFrancais && data.niveauDeFrancais.moyen) { frLvlListe.push("Moyen") }
    if (data.niveauDeFrancais && data.niveauDeFrancais.elever) { frLvlListe.push("Élever") }
    const frLvl = frLvlListe.join(", ")

    const situationListe = []
    if (data.situationFamiliale && data.situationFamiliale.veuf) { situationListe.push("Veuf") }
    if (data.situationFamiliale && data.situationFamiliale.divorcé) { situationListe.push("Divorcé") }
    if (data.situationFamiliale && data.situationFamiliale.celib) { situationListe.push("Célibataire") }
    if (data.situationFamiliale && data.situationFamiliale.marié) { situationListe.push("Marié") }
    const situation = situationListe.join(", ")

    let enfants
    if (data.situationFamiliale && data.situationFamiliale.sansEnfant) {
        enfants = "0"
    } 
    else if (data.situationFamiliale && data.situationFamiliale.enfantTexte) {
        enfants = data.situationFamiliale.enfantTexte
    } 
    else {
        enfants = ""
    }

    const structureListe = []
    if (data.AccompagnementSocial && data.AccompagnementSocial.Département) { structureListe.push("Dpt") }
    if (data.AccompagnementSocial && data.AccompagnementSocial.France_Travail) { structureListe.push("France Travail") }
    if (data.AccompagnementSocial && data.AccompagnementSocial.CCAS) { structureListe.push("CCAS") }
    if (data.AccompagnementSocial && data.AccompagnementSocial.Mission_locale) { structureListe.push("MILO") }
    if (data.AccompagnementSocial && data.AccompagnementSocial.Autre_Texte) { structureListe.push(data.AccompagnementSocial.Autre_Texte) }
    const structure = structureListe.join(", ")

    let rqth
    if (data.sante && data.sante.ouiRQTH) {
        rqth = "Oui"
    } 
    else {
        rqth = "Non"
    }

    // Pour chaque champ, si les coordonnées existent on prend la valeur, sinon on met vide
    let nomPrenom
    if (data.coordonnees) { nomPrenom = data.coordonnees.nomPrenom } 
    else { nomPrenom = "" }

    let dateNaissance
    if (data.coordonnees) { dateNaissance = data.coordonnees.dateNaissance } 
    else { dateNaissance = "" }

    let age
    if (data.coordonnees) { age = data.coordonnees.age } 
    else { age = "" }

    let ville
    if (data.coordonnees) { ville = data.coordonnees.ville } 
    else { ville = "" }

    let dateEtLieuDeLEntretien
    if (data.InfoDebut) { dateEtLieuDeLEntretien = data.InfoDebut.dateEtLieuDeLEntretien } 
    else { dateEtLieuDeLEntretien = "" }

    let prescripteur
    if (data.InfoDebut) { prescripteur = data.InfoDebut.prescripteur } 
    else { prescripteur = "" }

    let raison
    if (data.InfoDebut) { raison = data.InfoDebut.raison } 
    else { raison = "" }

    worksheet.addRow([
        nomPrenom,
        dateNaissance,
        age,
        situation,
        enfants,
        ville,
        rqth,
        minimasSocio,
        niveauEtude,
        frLvl,
        dateEtLieuDeLEntretien,
        prescripteur,
        structure,
        raison
    ])

    // Sauvegarde le fichier Excel sur le Bureau avec toutes les modifications
    await workbook.xlsx.writeFile(filePath)
}

module.exports = {
    saveDiagnostic
}