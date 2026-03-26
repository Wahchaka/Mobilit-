import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-status-emploi',
  imports: [CommonModule],
  templateUrl: './status-emploi.html',
  styleUrl: './status-emploi.css',
})
export class StatusEmploi {
  interimaire: boolean = false
  interimaireTexte: string | null = null
  cdd: boolean = false
  cddTexte: string | null = null
  cdi: boolean = false
  cdiTexte: string | null = null
  apprentissage: boolean = false
  apprentissageTexte: string | null = null
  contratAide: boolean = false
  contratAideTexte: string | null = null
  serviceCivique: boolean = false
  serviceCiviqueTexte: string | null = null
}
