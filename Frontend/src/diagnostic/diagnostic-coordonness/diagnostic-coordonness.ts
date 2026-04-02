import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnostic-coordonness',
  imports: [ReactiveFormsModule],
  templateUrl: './diagnostic-coordonness.html',
  styleUrl: './diagnostic-coordonness.css',
  standalone: true
})
export class DiagnosticCoordonness {
  @Input() formGroup!: FormGroup
}
