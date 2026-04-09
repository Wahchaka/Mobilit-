import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-representation-apprehension',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './representation-apprehension.html',
  styleUrl: './representation-apprehension.css',
})
export class RepresentationApprehension {
  @Input() formGroup!: FormGroup
}
