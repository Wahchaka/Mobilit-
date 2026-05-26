import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-niveau-etude',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './niveau-etude.html',
  styleUrl: './niveau-etude.css',
})
export class NiveauEtude {
  @Input() formGroup!: FormGroup
  @Input() francaisGroup!: FormGroup
}