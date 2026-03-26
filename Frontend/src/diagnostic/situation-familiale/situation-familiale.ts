import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-situation-familiale',
  imports: [CommonModule, FormsModule],
  templateUrl: './situation-familiale.html',
  styleUrl: './situation-familiale.css',
})
export class SituationFamiliale {
  aDesEnfants: boolean = false
  nombreEnfants: number | null = null
}
