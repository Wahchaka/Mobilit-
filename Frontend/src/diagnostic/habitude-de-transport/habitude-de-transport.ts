import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habitude-de-transport',
  imports: [CommonModule, FormsModule],
  templateUrl: './habitude-de-transport.html',
  styleUrl: './habitude-de-transport.css',
})
export class HabitudeDeTransport {
  habitudes = [
    { autre: false, autreValue: "" },
    { autre: false, autreValue: "" },
    { autre: false, autreValue: "" }
  ]

  motif = [
    { autre2: false, autre2Value: "" },
    { autre2: false, autre2Value: "" },
    { autre2: false, autre2Value: "" }
  ]

  abonnements = [
    { tarif: false, tarifValue: "" },
    { tarif: false, tarifValue: "" },
    { tarif: false, tarifValue: "" }
  ]

  vehicules = [
    { autre3: false, autre3Value: "" },
    { autre3: false, autre3Value: "" },
    { autre3: false, autre3Value: "" }
  ]

  proprietaire = [
    { autre4: false, autre4Value: "" },
    { autre4: false, autre4Value: "" },
    { autre4: false, autre4Value: "" }
  ]

  disponibilite = [
    { autre5: false, autre5Value: "" },
    { autre5: false, autre5Value: "" },
    { autre5: false, autre5Value: "" }
  ]

  pretALUsage = [
    { autre6: false, autre6Value: "" },
    { autre6: false, autre6Value: "" },
    { autre6: false, autre6Value: "" }
  ]

  proprietaireCheck = [
    "Propriété personnelle",
    "Propriété du ménage",
    "Propriété du conjoint",
    "Propriété des parents"
  ]

  disponibiliteCheck = [
    "Tous les jours ou presque",
    "2 à 3 jours par semaine",
    "1 jour par semaine",
    "2 à 3 jours par mois",
    "1 jour par mois",
    "Moins d'un jour"
  ]

  pretALUSageCheck = [
    "Oui",
    "Problème de stationnement",
    "État insatisfaisant",
    "Pas d'assurance",
    "Pas de contrôle technique",
    "Pas de carte grise"
  ]

  vehiculeCheck = [
    "Voiture 5-7",
    "Voiture 2",
    "Voiturette",
    "Moto",
    "Scooter, vélomoteur",
    "Vélo conventionnel",
    "Vélo électrique",
    "Trottinette",
    "Pas de véhicule"
  ]

  transports = [
    "Voiture",
    "2 roues motorisés",
    "Bus",
    "Train",
    "Vélo/trottinette",
    "Marches"
  ]

  abonnementCheck = [
    "Pas d\'abonnement",
    "Mensuel",
    "Annuel"
  ]

  frequences = [
    "Tous les jours ou presque",
    "2/3 jours par semaine",
    "1 jour/semaine",
    "2/3 jours par mois",
    "1 jour/mois",
    "Moins"
  ]

  perimetres = [
    "Domicile",
    "Quartier",
    "Ville/commune",
    "Agglomération",
    "Aire d\'attraction",
    "Département",
    "Région",
    "France",
    "Plus"
  ]

  motifsCheck = [
    "Vie professionnelle",
    "Vie quotidienne",
    "Vie sociale et loisirs"
  ]
}