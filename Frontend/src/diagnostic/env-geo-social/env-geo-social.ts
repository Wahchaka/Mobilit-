import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-env-geo-social',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './env-geo-social.html',
  styleUrl: './env-geo-social.css',
})
export class EnvGeoSocial {
  @Input() formGroup!: FormGroup
}
