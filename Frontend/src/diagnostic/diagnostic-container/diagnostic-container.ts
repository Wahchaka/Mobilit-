import { Component } from '@angular/core';
import { DiagnosticCoordonness } from '../diagnostic-coordonness/diagnostic-coordonness';
import { StatusEmploi } from '../status-emploi/status-emploi';
import { StatusMobilite } from '../status-mobilite/status-mobilite';
import { ProjetPermisDeConduire } from '../projet-permis-de-conduire/projet-permis-de-conduire';
import { NiveauEtude } from '../niveau-etude/niveau-etude';
import { SituationFamiliale } from '../situation-familiale/situation-familiale';
import { Ressources } from '../ressources/ressources';
import { AccompagnementSocial } from '../accompagnement-social/accompagnement-social';
import { SituationLogement } from '../situation-logement/situation-logement';
import { ChoixLocalisationDomicile } from '../choix-localisation-domicile/choix-localisation-domicile';
import { EnvGeoSocial } from '../env-geo-social/env-geo-social';
import { ProjetDeDemenagement } from '../projet-de-demenagement/projet-de-demenagement';
import { AnneeArriverFrance } from '../annee-arriver-france/annee-arriver-france';
import { NavBar } from '../../nav-bar/nav-bar';
import { PersonnesACharge } from '../personnes-a-charge/personnes-a-charge';
import { Sante } from '../sante/sante';
import { HabitudeDeTransport } from '../habitude-de-transport/habitude-de-transport';
import { FormControl, FormControlName, FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjetAchat } from "../projet-achat/projet-achat";

@Component({
  selector: 'app-diagnostic-container',
  imports: [DiagnosticCoordonness, StatusEmploi, StatusMobilite, ProjetPermisDeConduire, NiveauEtude, SituationFamiliale, Ressources, AccompagnementSocial, SituationLogement,
    ChoixLocalisationDomicile, EnvGeoSocial, ProjetDeDemenagement, AnneeArriverFrance, NavBar, PersonnesACharge, Sante, HabitudeDeTransport, FormsModule, ReactiveFormsModule, 
    ProjetAchat],
  templateUrl: './diagnostic-container.html',
  styleUrl: './diagnostic-container.css',
  standalone: true
})
export class DiagnosticContainer {
  form = new FormGroup({
    coordonnees: new FormGroup({
      nomPrenom: new FormControl(""),
      dateNaissance: new FormControl(""),
      adresse: new FormControl(""),
      codePostal: new FormControl(""),
      ville: new FormControl(""),
      telephone: new FormControl(""),
      email: new FormControl("")
    }),

    statusEmploi: new FormGroup({
      interimaire: new FormControl(false),
      interimaireTexte: new FormControl(""),
      cdd: new FormControl(false),
      cddTexte: new FormControl(""),
      cdi: new FormControl(false),
      cdiTexte: new FormControl(""),
      apprentissage: new FormControl(false),
      apprentissageTexte: new FormControl(""),
      contratAide: new FormControl(false),
      contratAideTexte: new FormControl(""),
      serviceCivique: new FormControl(false),
      serviceCiviqueTexte: new FormControl(""),
    }),

    statusMobilite: new FormGroup({
      codeObtenu: new FormControl(false),
      codeObtenuTexte: new FormControl(""),
      finParcoursConduite: new FormControl(false),
      finParcoursConduiteTexte: new FormControl(""),
      permisEtranger: new FormControl(false),
      permisEtrangerTexte: new FormControl(""),
      codeEnCours: new FormControl(false),
      codeEnCoursTexte: new FormControl(""),
      permisB: new FormControl(false),
      permisBTexte: new FormControl(""),
      permisAutre: new FormControl(false),
      permisAutreTexte: new FormControl("")
    }),

    niveauDEtudes: new FormGroup({
      niveau3: new FormControl(false),
      niveau3Texte: new FormControl(""),
      niveau4: new FormControl(false),
      niveau4Texte: new FormControl(""),
      niveau5: new FormControl(false),
      niveau5Texte: new FormControl(""),
      niveau6: new FormControl(false),
      niveau6Texte: new FormControl(""),
      niveau7: new FormControl(false),
      niveau7Texte: new FormControl(""),
      niveau8: new FormControl(false),
      niveau8Texte: new FormControl("")
    }),

    situationLogement: new FormGroup({
      neSouhaiteRepondre: new FormControl(false),
      sdf: new FormControl(false),
      proprietaire: new FormControl(false),
      locataire: new FormControl(false),
      baileurSocial: new FormControl(false),
      horsBaileurSocial: new FormControl(false),
      hebergement: new FormControl(false),
      hebergementAmis: new FormControl(false),
      hebergementParents: new FormControl(false),
      hebergementConjoint: new FormControl(false),
      hebergementAvecParticipation: new FormControl(false),
      hebergementSansParticipation: new FormControl(false),
      foyer: new FormControl(false),
      foyerTexte: new FormControl(""),
      autreLogement: new FormControl(false),
      autreLogementTexte: new FormControl("")
    }),

    projetPermisConduire: new FormGroup({
      aucun: new FormControl(false),
      permisAnnule: new FormControl(false),
      permisInvalide: new FormControl(false),
      permisSuspendu: new FormControl(false),
      permisBBoiteManu: new FormControl(false),
      permisBEABoiteAuto: new FormControl(false),
      permisMoto: new FormControl(false),
      permisPOidsLourd: new FormControl(false),
      permisSuperLourd: new FormControl(false),
      transportEnCommun: new FormControl(false),
      etranger: new FormControl(false),
      permisAM: new FormControl(false),
      permisASR: new FormControl(false),
      permisASSR1: new FormControl(false),
      jamaisInscrit: new FormControl(false),
      inscrit: new FormControl(false),
      inscritTexte: new FormControl(""),
      demarcheEnCOurs: new FormControl(false),
      inscriptionValide: new FormControl(false),
      preparationCode: new FormControl(false),
      codeValide: new FormControl(false),
      preparationConduiteInconnu: new FormControl(false),
      preparationConduite: new FormControl(false),
      preparationConduiteTexte: new FormControl(""),
      permisEtrangerEnValidation: new FormControl(false),
      permisProb: new FormControl(false),
      permisValidé: new FormControl(false)
    }),

    situationFamiliale: new FormGroup({
      veuf: new FormControl(false),
      divorcé: new FormControl(false),
      celib: new FormControl(false),
      marié: new FormControl(false),
      sansEnfant: new FormControl(false),
      enfant: new FormControl(false),
      enfantTexte: new FormControl("")
    }),

    ressource: new FormGroup({
      salaire: new FormControl(false),
      rsa: new FormControl(false),
      ass: new FormControl(false),
      are: new FormControl(false),
      aah: new FormControl(false),
      sans: new FormControl(false)
    }),

    AccompagnementSocial: new FormGroup({
      Département: new FormControl(false),
      France_Travail: new FormControl(false),
      CCAS: new FormControl(false),
      Mission_locale: new FormControl(false),
      Autre: new FormControl(false),
      Autre_texte: new FormControl("")
    }),

    choixLocalisationDomicile: new FormGroup({
      annéeDArrivéeDansVotreCommuneActuelle: new FormControl(""),
      choixPersonnel: new FormControl(false),
      compromis: new FormControl(false),
      décisionSubie: new FormControl(false),
      autre: new FormControl(false),
      autreTexte: new FormControl("")
    }),

    environnementGeographiqueSocial: new FormGroup({
      transportEnCommun: new FormControl(false),
      trains: new FormControl(false),
      TAD: new FormControl(false),
      autre: new FormControl(false),
      autreTexte: new FormControl(""),
      rien: new FormControl(false)
    }),

    ProjetDeDemenagement: new FormGroup({
      non: new FormControl(false),
      nonMaisEnvisageablePourTrouverUnEmploi: new FormControl(false),
      uneEnvieUnSouhait: new FormControl(false),
      ouiCEstUnProjetConcret: new FormControl(false),
      autre: new FormControl(false),
      autreTexte: new FormControl("")
    }),

    anneeArriverFrance: new FormGroup({
      papiersDIdentitéValide: new FormControl(false),
      carteDeSéjourValide: new FormControl(false),
      RécépisséDeDemandeDeTitreDeSéjour: new FormControl(false),
      aucunDesDocumentsCités: new FormControl(false)
    }),

    personnesACharge: new FormGroup({
      ageDesEnfantsOuPersonnesÀCharge: new FormControl(""),
      modeDeGarde: new FormControl("")
    }),

    sante: new FormGroup({
      ouiCSS: new FormControl(false),
      nonCSS: new FormControl(false),
      ouiRQTH: new FormControl(false),
      nonRQTH: new FormControl(false),
      faible: new FormControl(false),
      moyen: new FormControl(false),
      élevé: new FormControl(false),
      trèsÉlevé: new FormControl(false),
      maximal: new FormControl(false),
      ouiImpactMobilité: new FormControl(false),
      nonImpactMobilité: new FormControl(false)
    }),

    habitudeDeTransport: new FormGroup({
      habitudes: new FormArray([
        new FormGroup({ 
          voiture: new FormControl(false),
          deuxRoues: new FormControl(false),
          bus: new FormControl(false),
          train: new FormControl(false),
          veloTrottinette: new FormControl(false),
          marche: new FormControl(false),
          autre: new FormControl(false),
          autreValue: new FormControl("")
        }),

        new FormGroup({ 
          voiture: new FormControl(false),
          deuxRoues: new FormControl(false),
          bus: new FormControl(false),
          train: new FormControl(false),
          veloTrottinette: new FormControl(false),
          marche: new FormControl(false),
          autre: new FormControl(false),
          autreValue: new FormControl(""),
        }),

        new FormGroup({ 
          voiture: new FormControl(false),
          deuxRoues: new FormControl(false),
          bus: new FormControl(false),
          train: new FormControl(false),
          veloTrottinette: new FormControl(false),
          marche: new FormControl(false),
          autre: new FormControl(false),
          autreValue: new FormControl(""),
        }),
      ]),

      frequence: new FormArray([
        new FormGroup({
          tousLesJoursOuPresque: new FormControl(false),
          deuxSurTroisJoursParSemaine: new FormControl(false),
          unJourParSemaine: new FormControl(false),
          deuxSurTroisJoursParMois: new FormControl(false),
          unJourParMois: new FormControl(false),
          mois: new FormControl(false)
        }),
        
        new FormGroup({
          tousLesJoursOuPresque: new FormControl(false),
          deuxSurTroisJoursParSemaine: new FormControl(false),
          unJourParSemaine: new FormControl(false),
          deuxSurTroisJoursParMois: new FormControl(false),
          unJourParMois: new FormControl(false),
          mois: new FormControl(false)
        }),

        new FormGroup({
          tousLesJoursOuPresque: new FormControl(false),
          deuxSurTroisJoursParSemaine: new FormControl(false),
          unJourParSemaine: new FormControl(false),
          deuxSurTroisJoursParMois: new FormControl(false),
          unJourParMois: new FormControl(false),
          mois: new FormControl(false)
        })
      ]),

      perimetre: new FormArray([
        new FormGroup({
          domicile: new FormControl(false),
          quartier: new FormControl(false),
          villeOuCommune: new FormControl(false),
          agglomeration: new FormControl(false),
          aireDAttraction: new FormControl(false),
          departement: new FormControl(false),
          region: new FormControl(false),
          france: new FormControl(false),
          plus: new FormControl(false)
        }),

        new FormGroup({
          domicile: new FormControl(false),
          quartier: new FormControl(false),
          villeOuCommune: new FormControl(false),
          agglomeration: new FormControl(false),
          aireDAttraction: new FormControl(false),
          departement: new FormControl(false),
          region: new FormControl(false),
          france: new FormControl(false),
          plus: new FormControl(false)
        }),

        new FormGroup({
          domicile: new FormControl(false),
          quartier: new FormControl(false),
          villeOuCommune: new FormControl(false),
          agglomeration: new FormControl(false),
          aireDAttraction: new FormControl(false),
          departement: new FormControl(false),
          region: new FormControl(false),
          france: new FormControl(false),
          plus: new FormControl(false)
        })
      ]),

      motif: new FormArray([
        new FormGroup({
          vieProfessionnelle: new FormControl(false),
          vieQuotidienne: new FormControl(false),
          vieScolaireEtLoisir: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        }),

        new FormGroup({
          vieProfessionnelle: new FormControl(false),
          vieQuotidienne: new FormControl(false),
          vieScolaireEtLoisir: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        }),

        new FormGroup({
          vieProfessionnelle: new FormControl(false),
          vieQuotidienne: new FormControl(false),
          vieScolaireEtLoisir: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      abonnements: new FormArray([
        new FormGroup({ 
          pasAbonnement: new FormControl(false), 
          mensuel: new FormControl(false), 
          annuel: new FormControl(false), 
          tarif: new FormControl(false), 
          tarifValue: new FormControl("") 
        }),

        new FormGroup({ 
          pasAbonnement: new FormControl(false), 
          mensuel: new FormControl(false), 
          annuel: new FormControl(false), 
          tarif: new FormControl(false), 
          tarifValue: new FormControl("") 
        }),

        new FormGroup({ 
          pasAbonnement: new FormControl(false), 
          mensuel: new FormControl(false), 
          annuel: new FormControl(false), 
          tarif: new FormControl(false), 
          tarifValue: new FormControl("") 
        }),
      ]),

      vehicules: new FormArray([
        new FormGroup({ 
          voiture57: new FormControl(false), 
          voiture2: new FormControl(false), 
          voiturette: new FormControl(false), 
          moto: new FormControl(false), 
          scooter: new FormControl(false), 
          veloConventionnel: new FormControl(false), 
          veloElectrique: new FormControl(false), 
          trottinette: new FormControl(false), 
          pasDeVehicule: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          voiture57: new FormControl(false), 
          voiture2: new FormControl(false), 
          voiturette: new FormControl(false), 
          moto: new FormControl(false), 
          scooter: new FormControl(false), 
          veloConventionnel: new FormControl(false), 
          veloElectrique: new FormControl(false), 
          trottinette: new FormControl(false), 
          pasDeVehicule: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          voiture57: new FormControl(false), 
          voiture2: new FormControl(false), 
          voiturette: new FormControl(false), 
          moto: new FormControl(false), 
          scooter: new FormControl(false), 
          veloConventionnel: new FormControl(false), 
          veloElectrique: new FormControl(false), 
          trottinette: new FormControl(false), 
          pasDeVehicule: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        })
      ]),
      
      proprietaires: new FormArray([
        new FormGroup({ 
          personnelle: new FormControl(false), 
          menage: new FormControl(false), 
          conjoint: new FormControl(false), 
          parents: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          personnelle: new FormControl(false), 
          menage: new FormControl(false), 
          conjoint: new FormControl(false), 
          parents: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          personnelle: new FormControl(false), 
          menage: new FormControl(false), 
          conjoint: new FormControl(false), 
          parents: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        })
      ]),
      disponibilites: new FormArray([
        new FormGroup({ 
          tousLesJours: new FormControl(false), 
          deuxTroisJoursSemaine: new FormControl(false), 
          unJourSemaine: new FormControl(false), 
          deuxTroisJoursMois: new FormControl(false), 
          unJourMois: new FormControl(false), 
          moinsUnJour: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          tousLesJours: new FormControl(false), 
          deuxTroisJoursSemaine: new FormControl(false), 
          unJourSemaine: new FormControl(false), 
          deuxTroisJoursMois: new FormControl(false), 
          unJourMois: new FormControl(false), 
          moinsUnJour: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          tousLesJours: new FormControl(false), 
          deuxTroisJoursSemaine: new FormControl(false), 
          unJourSemaine: new FormControl(false), 
          deuxTroisJoursMois: new FormControl(false), 
          unJourMois: new FormControl(false), 
          moinsUnJour: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),
      ]),

      pretALUsages: new FormArray([
        new FormGroup({ 
          oui: new FormControl(false), 
          stationnement: new FormControl(false), 
          etatInsatisfaisant: new FormControl(false), 
          pasAssurance: new FormControl(false), 
          pasControleTechnique: new FormControl(false), 
          pasCarteGrise: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          oui: new FormControl(false), 
          stationnement: new FormControl(false), 
          etatInsatisfaisant: new FormControl(false), 
          pasAssurance: new FormControl(false), 
          pasControleTechnique: new FormControl(false), 
          pasCarteGrise: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),

        new FormGroup({ 
          oui: new FormControl(false), 
          stationnement: new FormControl(false), 
          etatInsatisfaisant: new FormControl(false), 
          pasAssurance: new FormControl(false), 
          pasControleTechnique: new FormControl(false), 
          pasCarteGrise: new FormControl(false), 
          autre: new FormControl(false), 
          autreValue: new FormControl("") 
        }),
      ]),
      complementDHabitude: new FormControl("")
    })
  })

  get coordonnees(): FormGroup {
    return this.form.controls['coordonnees'] as FormGroup
  }

  get statusEmploi(): FormGroup {
    return this.form.controls['statusEmploi'] as FormGroup
  }

  get statusMobilite(): FormGroup {
    return this.form.controls['statusMobilite'] as FormGroup
  }

  get niveauDEtudes(): FormGroup {
    return this.form.controls['niveauDEtudes'] as FormGroup
  }

  get situationLogement(): FormGroup {
    return this.form.controls['situationLogement'] as FormGroup
  }

  get projetPermisConduire(): FormGroup {
    return this.form.controls['projetPermisConduire'] as FormGroup
  }

  get situationFamiliale(): FormGroup {
    return this.form.controls['situationFamiliale'] as FormGroup
  }

  get ressource(): FormGroup {
    return this.form.controls['ressource'] as FormGroup
  }

  get AccompagnementSocial(): FormGroup {
    return this.form.controls['AccompagnementSocial'] as FormGroup
  }

  get choixLocalisationDomicile(): FormGroup {
    return this.form.controls['choixLocalisationDomicile'] as FormGroup
  }

  get environnementGeographiqueSocial(): FormGroup {
    return this.form.controls['environnementGeographiqueSocial'] as FormGroup
  }

  get ProjetDeDemenagement(): FormGroup {
    return this.form.controls['ProjetDeDemenagement'] as FormGroup
  }

  get anneeArriverFrance(): FormGroup {
    return this.form.controls['anneeArriverFrance'] as FormGroup
  }

  get personnesACharge(): FormGroup {
    return this.form.controls['personnesACharge'] as FormGroup
  }

  get sante(): FormGroup {
    return this.form.controls['sante'] as FormGroup
  }

  get habitudeDeTransport(): FormGroup {
    return this.form.controls['habitudeDeTransport'] as FormGroup
  }

  submit() {
    console.log(this.form.value)
  }
}