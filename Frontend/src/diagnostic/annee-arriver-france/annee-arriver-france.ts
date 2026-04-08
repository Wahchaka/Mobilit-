import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-annee-arriver-france',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './annee-arriver-france.html',
  styleUrl: './annee-arriver-france.css',
})
export class AnneeArriverFrance {
   @Input() formGroup!: FormGroup
}
