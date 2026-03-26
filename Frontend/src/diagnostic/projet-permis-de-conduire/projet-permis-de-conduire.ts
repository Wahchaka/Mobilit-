import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projet-permis-de-conduire',
  imports: [CommonModule],
  templateUrl: './projet-permis-de-conduire.html',
  styleUrl: './projet-permis-de-conduire.css',
})
export class ProjetPermisDeConduire {
  estimiationPermis: boolean = false
  estimationText: string | null = null
  inscritAE: boolean = false
  inscritAETexte: string | null = null
}