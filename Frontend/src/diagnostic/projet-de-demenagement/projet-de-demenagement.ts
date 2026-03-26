import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projet-de-demenagement',
  imports: [CommonModule],
  templateUrl: './projet-de-demenagement.html',
  styleUrl: './projet-de-demenagement.css',
})
export class ProjetDeDemenagement {
  autre: boolean = false
  autreChoixTexte: string | null = null
}
