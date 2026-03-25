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

@Component({
  selector: 'app-diagnostic-container',
  imports: [DiagnosticCoordonness, StatusEmploi, StatusMobilite, ProjetPermisDeConduire, NiveauEtude, SituationFamiliale, Ressources, AccompagnementSocial, SituationLogement],
  templateUrl: './diagnostic-container.html',
  styleUrl: './diagnostic-container.css',
  standalone: true
})
export class DiagnosticContainer {}
