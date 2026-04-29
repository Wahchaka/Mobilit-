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
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProjetAchat } from "../projet-achat/projet-achat";
import { RepresentationApprehension } from '../representation-apprehension/representation-apprehension';
import { FinalitesDuProjetMobilite } from '../finalites-du-projet-mobilite/finalites-du-projet-mobilite';
import { BesoinsExprimeDansCeProjet } from '../besoins-exprime-dans-ce-projet/besoins-exprime-dans-ce-projet';
import { SavoirBouger } from '../savoir-bouger/savoir-bouger';
import { InfoDebut } from '../info-debut/info-debut';
import { Separateur } from '../separateur/separateur';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diagnostic-container',
  imports: [DiagnosticCoordonness, StatusEmploi, StatusMobilite, ProjetPermisDeConduire, NiveauEtude, SituationFamiliale, Ressources, AccompagnementSocial, SituationLogement,
    ChoixLocalisationDomicile, EnvGeoSocial, ProjetDeDemenagement, AnneeArriverFrance, NavBar, PersonnesACharge, Sante, HabitudeDeTransport, FormsModule, ReactiveFormsModule,
    ProjetAchat, RepresentationApprehension, FinalitesDuProjetMobilite, BesoinsExprimeDansCeProjet, SavoirBouger, InfoDebut, Separateur],
  templateUrl: './diagnostic-container.html',
  styleUrl: './diagnostic-container.css',
  standalone: true
})
export class DiagnosticContainer {

  constructor(private http: HttpClient) {}

  form = new FormGroup({
    coordonnees: new FormGroup({
      nomPrenom: new FormControl(""),
      dateNaissance: new FormControl(""),
      age: new FormControl(""),
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
      etranger: new FormControl(false),
      etrangerTexte: new FormControl(""),
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
    }),

    projetAchat: new FormGroup({
      projetAchat: new FormArray([
        new FormGroup({
          non: new FormControl(false),
          voiture5Places: new FormControl(false),
          voiture2Places: new FormControl(false),
          voiturette: new FormControl(false),
          moto: new FormControl(false),
          scooter: new FormControl(false),
          veloConventionnel: new FormControl(false),
          veloElectrique: new FormControl(false),
          trottinette: new FormControl(false)
        })
      ]),

      projetLocation: new FormArray([
        new FormGroup({
          non: new FormControl(false),
          voiture5Places: new FormControl(false),
          voiture2Places: new FormControl(false),
          voiturette: new FormControl(false),
          scooter: new FormControl(false),
          veloConventionnel: new FormControl(false),
          veloElectrique: new FormControl(false),
          trottinette: new FormControl(false)
        })
      ]),

      CreditOuEmpruntEstCeUneAlternativePossiblePourVous: new FormArray([
        new FormGroup({
          oui: new FormControl(false),
          ouiSelonLaNecesssite: new FormControl(false),
          nonManqueDeRessource: new FormControl(false),
          nonInterditBancaire: new FormControl(false),
          nonIncidentRemboursement: new FormControl(false),
          nonRaisonPersonnelle: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      dette: new FormArray([
        new FormGroup({
          non: new FormControl(false),
          ouiPlanDeSurendettement: new FormControl(false),
          ouiDettesDansUneAutoEcole: new FormControl(false),
          ouiDettesLieesAuTransportEnCommun: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      decisionBudgetAvezVousLaGestionDeVotrePopreBudget: new FormArray([
        new FormGroup({
          oui: new FormControl(false),
          nonTutelle: new FormControl(false),
          nonCuratelle: new FormControl(false),
          nonGestionParUnMembreDuFoyer: new FormControl(false),
          nonGestionParUnMembreDuFoyerTexte: new FormControl(""),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      revenusAllocation: new FormArray([
        new FormGroup({
          aucunRevenu: new FormControl(false),
          revenuDuMenage: new FormControl(false),
          salaire: new FormControl(false),
          RSARevenuDeSolidariteActive: new FormControl(false),
          ASSAllocationSpecifiqueDeSolidarite: new FormControl(false),
          CEJ: new FormControl(false),
          primeDActivite: new FormControl(false),
          AREAllocationRetourALEmploi: new FormControl(false),
          AAHAllocationAdulteHandicape: new FormControl(false),
          AEEHAllocationEducationEnfantHandicape: new FormControl(false),
          pensionInvalidite: new FormControl(false),
          ASIAllocationSupplementaireInvalidite: new FormControl(false),
          pensionRetraite: new FormControl(false),
          ASPAAllocationDeSolidariteAuxPersonnesAgees: new FormControl(false),
          pensionAlimentaire: new FormControl(false),
          allocationVeuvage: new FormControl(false),
          allocationDemandeurDAsile: new FormControl(false),
          APL: new FormControl(false),
          autreAllocationCAF: new FormControl(false),
          autreAllocationCAFTexte: new FormControl("")
        })
      ])
    }),

    RepresentationApprehension: new FormGroup({
      famille: new FormControl(false),
      travail: new FormControl(false),
      demarcheAdmin: new FormControl(false),
      autre: new FormControl(false),
      autreTexte: new FormControl("")
    }),

    FinalitesDuProjetMobilite: new FormGroup({
      meDeplacerPourAllerAuTravail: new FormControl(false),
      meDeplacerDansLExerciceDeMonTravail: new FormControl(false),
      meDeplacerPourMaVieQuotidienne: new FormControl(false),
      repondreAuxExigencesDeLEmployeur: new FormControl(false),
      repondreAuxExigencesDuPrescripteur: new FormControl(false),
      repondreAuxExigencesDUnTiersEntourage: new FormControl(false),
      etreFierDeMoiRealisationPersonnelle: new FormControl(false)
    }),

    BesoinsExprimeDansCeProjet: new FormGroup({
      besoins: new FormArray([
        new FormGroup({
          meDeplacerMoins: new FormControl(false),
          meDeplacerPlus: new FormControl(false),
          meDeplacerPlusLoin: new FormControl(false),
          meDeplacerPlusLibrement: new FormControl(false),
          meDeplacerPlusFacilement: new FormControl(false),
          meDeplacerPlusRapidement: new FormControl(false),
          meDeplacerPlusEfficacement: new FormControl(false),
          meDeplacerPlusEcologiquement: new FormControl(false),
          meDeplacerPlusConfortablement: new FormControl(false),
          meDeplacerAvecDesBagagesDesPassagers: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl(""),
        })
      ]),

      pourVousLaMobiliteCEstPlutotSynonymeDe: new FormArray([
        new FormGroup({
          droit: new FormControl(false),
          autonomieLiberte: new FormControl(false),
          plaisir: new FormControl(false),
          nouveaute: new FormControl(false),
          surete: new FormControl(false),
          rapprochement: new FormControl(false),
          autre2: new FormControl(false),
          autre2Texte: new FormControl(""),
          devoir: new FormControl(false),
          contrainte: new FormControl(false),
          penibilite: new FormControl(false),
          habitude: new FormControl(false),
          danger: new FormControl(false),
          eloignement: new FormControl(false)
        })
      ]),

      pourVousLamobiliteRenvoieAVosExperienceDeDeplacement: new FormArray([
        new FormGroup({
          quotidienneTravail: new FormControl(false),
          quotidienneAchatDemarcheActivite: new FormControl(false),
          touristique: new FormControl(false),
          residentielsDemenagement: new FormControl(false),
          autre3: new FormControl(false),
          autre3Texte: new FormControl("")
        })
      ]),

      pourVousLeTempsDeDeplacementRepresente: new FormArray([
        new FormGroup({
          unMomentPourDecompresser: new FormControl(false),
          unMomentPourDiscuterTelephoner: new FormControl(false),
          unMomentDAttenteTempsPerdu: new FormControl(false),
          unMomentDeStressDEffort: new FormControl(false),
          autre4: new FormControl(false),
          autre4Texte: new FormControl("")
        })
      ]),

      avezVousDesCraitesLieesALaMobilite: new FormArray([
        new FormGroup({
          sePerdre: new FormControl(false),
          personnesInconnues: new FormControl(false),
          environnementRural: new FormControl(false),
          laNuit: new FormControl(false),
          jugementRegardeDeLAutre: new FormControl(false),
          laisserVosEnfants: new FormControl(false),
          peurDeConduire: new FormControl(false),
          autre5: new FormControl(false),
          autre5Texte: new FormControl(""),
          deplacementSeul: new FormControl(false),
          endroitsInconnus: new FormControl(false),
          lieuxDeserts: new FormControl(false),
          lieuBondes: new FormControl(false),
          laisserVotreDomicileSansSurveillance: new FormControl(false),
          laisserVosAnimaux: new FormControl(false),
        })
      ]),

      voitureAdjectifs: new FormArray([
        new FormGroup({
          rapide: new FormControl(false),
          lent: new FormControl(false),
          bonMarche: new FormControl(false),
          cher: new FormControl(false),
          pratique: new FormControl(false),
          pasPratique: new FormControl(false),
          ecologique: new FormControl(false),
          polluant: new FormControl(false),
          sur: new FormControl(false),
          dangereur: new FormControl(false),
          confortable: new FormControl(false),
          inconfortable: new FormControl(false),
          rendLibre: new FormControl(false),
          contraignant:new FormControl(false),
          reposant: new FormControl(false),
          fatiguant: new FormControl(false),
          sportif: new FormControl(false),
          loisir: new FormControl(false),
          autre6: new FormControl(false),
          autre6Texte: new FormControl("")
        })
      ]),

      transportEnCommunAdjectif: new FormArray([
        new FormGroup({
          rapide: new FormControl(false),
          lent: new FormControl(false),
          bonMarche: new FormControl(false),
          cher: new FormControl(false),
          pratique: new FormControl(false),
          pasPratique: new FormControl(false),
          ecologique: new FormControl(false),
          polluant: new FormControl(false),
          sur: new FormControl(false),
          dangereur: new FormControl(false),
          confortable: new FormControl(false),
          inconfortable: new FormControl(false),
          rendLibre: new FormControl(false),
          contraignant:new FormControl(false),
          reposant: new FormControl(false),
          fatiguant: new FormControl(false),
          sportif: new FormControl(false),
          loisir: new FormControl(false),
          autre7: new FormControl(false),
          autre7Texte: new FormControl("")
        })
      ]),

      VeloAdjectif: new FormArray([
        new FormGroup({
          rapide: new FormControl(false),
          lent: new FormControl(false),
          bonMarche: new FormControl(false),
          cher: new FormControl(false),
          pratique: new FormControl(false),
          pasPratique: new FormControl(false),
          ecologique: new FormControl(false),
          polluant: new FormControl(false),
          sur: new FormControl(false),
          dangereur: new FormControl(false),
          confortable: new FormControl(false),
          inconfortable: new FormControl(false),
          rendLibre: new FormControl(false),
          contraignant:new FormControl(false),
          reposant: new FormControl(false),
          fatiguant: new FormControl(false),
          sportif: new FormControl(false),
          loisir: new FormControl(false),
          autre8: new FormControl(false),
          autre8Texte: new FormControl("")
        })
      ]),

      marcheAdjectif: new FormArray([
        new FormGroup({
          rapide: new FormControl(false),
          lent: new FormControl(false),
          bonMarche: new FormControl(false),
          cher: new FormControl(false),
          pratique: new FormControl(false),
          pasPratique: new FormControl(false),
          ecologique: new FormControl(false),
          polluant: new FormControl(false),
          sur: new FormControl(false),
          dangereur: new FormControl(false),
          confortable: new FormControl(false),
          inconfortable: new FormControl(false),
          rendLibre: new FormControl(false),
          contraignant:new FormControl(false),
          reposant: new FormControl(false),
          fatiguant: new FormControl(false),
          sportif: new FormControl(false),
          loisir: new FormControl(false),
          autre9: new FormControl(false),
          autre9Texte: new FormControl("")
        })
      ]),
    }),

    savoirBouger: new FormGroup({
      ecouteComprehensionOral: new FormArray([
        new FormGroup({
          elementaireNiveauAA2Oumoins: new FormControl(false),
          independantNiveauBB1B2: new FormControl(false),
          experimenteNiveauCC1EtPlus: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      parlerExpressionOral: new FormArray([
        new FormGroup({
          elementaireNiveauAA2Oumoins: new FormControl(false),
          independantNiveauBB1B2: new FormControl(false),
          experimenteNiveauCC1EtPlus: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      lireComprehensionEcrite: new FormArray([
        new FormGroup({
          elementaireNiveauAA2Oumoins: new FormControl(false),
          independantNiveauBB1B2: new FormControl(false),
          experimenteNiveauCC1EtPlus: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      ecrireExpressionEcrite: new FormArray([
        new FormGroup({
          elementaireNiveauAA2Oumoins: new FormControl(false),
          independantNiveauBB1B2: new FormControl(false),
          experimenteNiveauCC1EtPlus: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      maitreChiffresEtEmploiDutemps: new FormArray([
        new FormGroup({
          oui: new FormControl(false),
          nonDifficultesAvecAudditionSoustraction: new FormControl(false),
          nonDifficultesAvecMultiplicationDivision: new FormControl(false),
          nonDifficultesAvecCombinaisonPermutation: new FormControl(false),
          nonDifficultesAvecChronologie: new FormControl(false),
          nonDifficultesAvecAgendaOublieRDV: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      difficultesDApprentissage: new FormArray([
        new FormGroup({
          non: new FormControl(false),
          ouiConcentration: new FormControl(false),
          ouiMémorisation: new FormControl(false),
          ouiDifficultesDansLesRapportsInterpersonnels: new FormControl(false),
          ouiBesoinDeGagnerEnAutonomiePourLApprentissage: new FormControl(false),
          ouiBesoinsDeGagnerEnAssurancePourLApprentissage: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      psychoSensorielPratiqueSportInstrument: new FormArray([
        new FormGroup({
          non: new FormControl(false),
          ouiPratiqueSportActuellement: new FormControl(false),
          ouiPratiqueSportDansLePasse: new FormControl(false),
          ouiPratiqueInstrumentActuellement: new FormControl(false),
          ouiPratiqueInstrumentDansLePasse: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      accesAppareilInformatiquesPersonnels: new FormArray([
        new FormGroup({
          aucun: new FormControl(false),
          smartphone: new FormControl(false),
          telephonePortableBasique: new FormControl(false),
          ordinateurFixe: new FormControl(false),
          ordinateurPortable: new FormControl(false),
          tablette: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      accesInternet: new FormArray([
        new FormGroup({
          non: new FormControl(false),
          ouiALInterieurDuDomicile: new FormControl(false),
          ouiALExterieurDuDomicile: new FormControl(false)
        })
      ]),

      difficultesAvecMaitriseDesAppareilsInformatiques: new FormArray([
        new FormGroup({
          smartphone: new FormControl(false),
          ordinateur: new FormControl(false),
          tablette: new FormControl(false),
          nonAucune: new FormControl(false)
        })
      ]),

      difficultesAvecMaitriseInternetApplication: new FormArray([
        new FormGroup({
          internetPourOrganisationDesDeplacements: new FormControl(false),
          internetPourAchatDemarche: new FormControl(false),
          difficultesPourRechercheDEmplois: new FormControl(false),
          reseauSociaux: new FormControl(false),
          aucune: new FormControl(false)
        })
      ]),

      eprouvezVousDesDifficultesPourDifferencier: new FormArray([
        new FormGroup({
          gaucheDroite: new FormControl(false),
          pointsCardinaux: new FormControl(false),
          lesFormes: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl(""),
          Non: new FormControl(false)
        })
      ]),

      eprouvezVousDesDifficultesAVOusRepererAvec: new FormArray([
        new FormGroup({
          calculateurDItineraire: new FormControl(false),
          carteUnPlan: new FormControl(false),
          lesNumerosDeRuePanneauxDIndication: new FormControl(false),
          uneTiercePersoneInconnue: new FormControl(false),
          uneTiercePersoneConnue: new FormControl(false),
          aucunes: new FormControl(false)
        })
      ]),

      commentEstimezVousUnTempsDeTrajet: new FormArray([
        new FormGroup({
          facilement: new FormControl(false),
          difficilement: new FormControl(false),
          neFaitPas: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      commentEstilezVousLesCoutLiesALaMobilite: new FormArray([
        new FormGroup({
          facilement: new FormControl(false),
          difficilement: new FormControl(false),
          neFaitPas: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      commentEstimezVousUneDistance: new FormArray([
        new FormGroup({
          facilement: new FormControl(false),
          difficilement: new FormControl(false),
          neFaitPas: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl("")
        })
      ]),

      commentpreparezVousVosTrajetsItinéraires: new FormArray([
        new FormGroup({
          avecUneCarteUnPlan: new FormControl(false),
          avecDesHorairesDeTransport: new FormControl(false),
          avecInternetParQuelBiais: new FormControl(false),
          avecUnDepartEnAvance: new FormControl(false),
          avecUnTrajetDeReperageEnAvance: new FormControl(false),
          autre: new FormControl(false),
          autreTexte: new FormControl(""),
          aucun: new FormControl(false)
        })
      ])
    }),

    InfoDebut: new FormGroup({
      dateEtLieuDeLEntretien: new FormControl(""),
      prescripteur: new FormControl(""),
      nomDuConseiller: new FormControl(""),
      telephone: new FormControl(""),
      structure: new FormControl(""),
      raison: new FormControl("")
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

  get projetAchat(): FormGroup {
    return this.form.controls['projetAchat'] as FormGroup
  }

  get RepresentationApprehension(): FormGroup{
    return this.form.controls['RepresentationApprehension'] as FormGroup
  }

  get FinalitesDuProjetMobilite(): FormGroup{
    return this.form.controls['FinalitesDuProjetMobilite'] as FormGroup
  }

  get BesoinsExprimeDansCeProjet(): FormGroup{
    return this.form.controls['BesoinsExprimeDansCeProjet'] as FormGroup
  }

  get savoirBouger(): FormGroup {
    return this.form.controls['savoirBouger'] as FormGroup
  }

  get InfoDebut(): FormGroup{
    return this.form.controls['InfoDebut'] as FormGroup
  }

  submit() {
    this.http.post('http://localhost:3000/diagnostic/save', this.form.value)
    .subscribe({
      next: () => console.log("Sauvegarde réussie"),
      error: (error) => console.error("Erreur lors de la sauvegarde :", error)
    })
  }
}