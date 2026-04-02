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

@Component({
  selector: 'app-diagnostic-container',
  imports: [DiagnosticCoordonness, StatusEmploi, StatusMobilite, ProjetPermisDeConduire, NiveauEtude, SituationFamiliale, Ressources, AccompagnementSocial, SituationLogement,
    ChoixLocalisationDomicile, EnvGeoSocial, ProjetDeDemenagement, AnneeArriverFrance, NavBar, PersonnesACharge, Sante, HabitudeDeTransport, FormsModule, ReactiveFormsModule,],
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
    })
  })
  get coordonnees(): FormGroup {
    return this.form.controls['coordonnees'] as FormGroup;
  }
  submit() {
    console.log(this.form.value)
  }
}
