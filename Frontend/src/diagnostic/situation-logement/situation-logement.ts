import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-situation-logement',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './situation-logement.html',
  styleUrl: './situation-logement.css',
})
export class SituationLogement {
  @Input() formGroup!: FormGroup
}