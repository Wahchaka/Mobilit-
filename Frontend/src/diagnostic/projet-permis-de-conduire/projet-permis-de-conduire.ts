import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projet-permis-de-conduire',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projet-permis-de-conduire.html',
  styleUrl: './projet-permis-de-conduire.css',
})
export class ProjetPermisDeConduire {
  @Input() formGroup!: FormGroup
}