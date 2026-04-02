import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-emploi',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './status-emploi.html',
  styleUrl: './status-emploi.css',
})
export class StatusEmploi {
  @Input() formGroup!: FormGroup
}