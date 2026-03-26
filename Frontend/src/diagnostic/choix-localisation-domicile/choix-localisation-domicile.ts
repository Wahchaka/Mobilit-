import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choix-localisation-domicile',
  imports: [CommonModule],
  templateUrl: './choix-localisation-domicile.html',
  styleUrl: './choix-localisation-domicile.css',
})
export class ChoixLocalisationDomicile {
  autreChoix: boolean = false
  autreChoixTexte: string = ""
}