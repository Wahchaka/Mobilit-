import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-env-geo-social',
  imports: [CommonModule],
  templateUrl: './env-geo-social.html',
  styleUrl: './env-geo-social.css',
})
export class EnvGeoSocial {
  autreChoix: boolean = false
  autreChoixTexte: string = ""
}
