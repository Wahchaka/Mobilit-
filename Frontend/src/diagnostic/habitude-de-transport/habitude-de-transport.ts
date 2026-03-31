import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-habitude-de-transport',
  imports: [CommonModule],
  templateUrl: './habitude-de-transport.html',
  styleUrl: './habitude-de-transport.css',
})
export class HabitudeDeTransport {
  habitudes = [1, 2, 3]

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