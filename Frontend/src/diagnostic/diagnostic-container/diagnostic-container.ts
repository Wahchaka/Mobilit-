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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  submit() {
    console.log(this.form.value)
  }
}