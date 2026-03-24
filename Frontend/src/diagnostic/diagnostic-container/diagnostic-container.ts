import { Component } from '@angular/core';
import { DiagnosticCoordonness } from '../diagnostic-coordonness/diagnostic-coordonness';
import { StatusEmploi } from '../status-emploi/status-emploi';
import { StatusMobilite } from '../status-mobilite/status-mobilite';

@Component({
  selector: 'app-diagnostic-container',
  imports: [DiagnosticCoordonness, StatusEmploi, StatusMobilite],
  templateUrl: './diagnostic-container.html',
  styleUrl: './diagnostic-container.css',
  standalone: true
})
export class DiagnosticContainer {}
