import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-choix-localisation-domicile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './choix-localisation-domicile.html',
  styleUrl: './choix-localisation-domicile.css',
})
export class ChoixLocalisationDomicile {
  @Input() formGroup!: FormGroup
}