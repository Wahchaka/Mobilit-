import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habitude-de-transport',
  imports: [CommonModule, FormsModule],
  templateUrl: './habitude-de-transport.html',
  styleUrl: './habitude-de-transport.css',
})
export class HabitudeDeTransport {
  habitudes = [
    { autre: false, autreValue: "" },
    { autre: false, autreValue: "" },
    { autre: false, autreValue: "" }
  ]

  transports = [
    'Voiture',
    '2 roues motorisés',
    'Bus',
    'Train',
    'Vélo/trottinette',
    'Marches',
    'Autres'
  ]

  frequences = [
    'Tous les jours ou presque',
    '2/3 jours par semaine',
    '1 jour/semaine',
    '2/3 jours par mois',
    '1 jour/mois',
    'Moins'
  ]

  perimetres = [
    'Domicile',
    'Quartier',
    'Ville/commune',
    'Agglomération',
    'Aire d’attraction',
    'Département',
    'Région',
    'France',
    'Plus'
  ]

  motifs = [
    'Vie professionnelle',
    'Vie quotidienne',
    'Vie sociale et loisirs',
    'Autres'
  ]
}