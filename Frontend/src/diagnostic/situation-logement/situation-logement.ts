import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-situation-logement',
  imports: [CommonModule],
  templateUrl: './situation-logement.html',
  styleUrl: './situation-logement.css',
})
export class SituationLogement {
  locataire: boolean = false
  baileurSocial: boolean = false
  horsBaileurSocial: boolean = false

  hebergement: boolean = false;
  hebergementAmis: boolean = false
  hebergementParents: boolean = false
  hebergementConjoint: boolean = false
  hebergementAvecParticipation: boolean = false
  hbergementSansParticipation: boolean = false

  autreLogement: boolean = false
  autreLogementTexte: string = ""
}
