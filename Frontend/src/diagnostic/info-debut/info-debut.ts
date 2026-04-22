import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-debut',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './info-debut.html',
  styleUrl: './info-debut.css',
})
export class InfoDebut {
  @Input() formGroup!: FormGroup
}
