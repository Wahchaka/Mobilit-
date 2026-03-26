import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-status-mobilite',
  imports: [CommonModule],
  templateUrl: './status-mobilite.html',
  styleUrl: './status-mobilite.css',
})
export class StatusMobilite {
  codeObtenu: boolean = false
  codeObtenuTexte: string | null = null
  finParcoursConduite: boolean = false
  finParcoursConduiteTexte: string | null = null
  permisEtrangerNonValide: boolean = false
  permisEtrangerNonvalideTexte: string | null = null
  codeEnCours: boolean = false
  codeEnCoursTexte: string | null = null
  permisB: boolean = false
  permisBTexte: string | null = null
  permisAutres: boolean = false
  permisAutresTexte: string | null = null
}
