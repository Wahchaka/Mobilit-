import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sante',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sante.html',
  styleUrl: './sante.css',
})
export class Sante {
  @Input() formGroup!: FormGroup
}