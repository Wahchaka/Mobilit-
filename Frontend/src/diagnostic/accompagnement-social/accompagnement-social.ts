import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-accompagnement-social',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './accompagnement-social.html',
  styleUrl: './accompagnement-social.css',
})
export class AccompagnementSocial {
  @Input() formGroup!: FormGroup
}
