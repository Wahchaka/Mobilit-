import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ressources',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ressources.html',
  styleUrl: './ressources.css',
})
export class Ressources {
  @Input() formGroup!: FormGroup
}
