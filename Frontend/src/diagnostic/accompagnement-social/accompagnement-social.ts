import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accompagnement-social',
  imports: [CommonModule, FormsModule],
  templateUrl: './accompagnement-social.html',
  styleUrl: './accompagnement-social.css',
})
export class AccompagnementSocial {
  Autre: boolean = false
  quoi: string | null = null
}
