import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-situation-familiale',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './situation-familiale.html',
  styleUrl: './situation-familiale.css',
})
export class SituationFamiliale {
  @Input() formGroup!: FormGroup
}
