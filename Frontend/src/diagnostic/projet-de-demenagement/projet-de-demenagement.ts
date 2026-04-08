import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projet-de-demenagement',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projet-de-demenagement.html',
  styleUrl: './projet-de-demenagement.css',
})
export class ProjetDeDemenagement {
  @Input() formGroup!: FormGroup
}
