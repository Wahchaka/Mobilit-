import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status-mobilite',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './status-mobilite.html',
  styleUrl: './status-mobilite.css',
})
export class StatusMobilite {
  @Input() formGroup!: FormGroup
}