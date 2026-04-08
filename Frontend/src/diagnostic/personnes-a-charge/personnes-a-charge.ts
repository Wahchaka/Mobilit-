import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personnes-a-charge',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personnes-a-charge.html',
  styleUrl: './personnes-a-charge.css',
})
export class PersonnesACharge {
  @Input() formGroup!: FormGroup
}
