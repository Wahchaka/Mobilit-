import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-finalites-du-projet-mobilite',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './finalites-du-projet-mobilite.html',
  styleUrl: './finalites-du-projet-mobilite.css',
})
export class FinalitesDuProjetMobilite {
  @Input() formGroup!: FormGroup
}
