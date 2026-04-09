import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-habitude-de-transport',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './habitude-de-transport.html',
  styleUrl: './habitude-de-transport.css',
})
export class HabitudeDeTransport {
  @Input() formGroup!: FormGroup

  transports = [ "Voiture", "2 roues motorisés", "Bus", "Train", "Vélo/trottinette", "Marches" ]
  frequences = [ "Tous les jours ou presque", "2/3 jours par semaine", "1 jour/semaine", "2/3 jours par mois", "1 jour/mois", "Moins" ]
  perimetres = ["Domicile", "Quartier", "Ville/commune", "Agglomération", "Aire d'attraction", "Département", "Région", "France", "Plus" ]
  motifsCheck = [ "Vie professionnelle", "Vie quotidienne", "Vie sociale et loisirs"]
  abonnementCheck = [ "Pas d'abonnement", "Mensuel", "Annuel" ]
  vehiculeCheck = [ "Voiture 5-7", "Voiture 2", "Voiturette", "Moto", "Scooter, vélomoteur", "Vélo conventionnel", "Vélo électrique", "Trottinette", "Pas de véhicule" ]
  proprietaireCheck = [ "Propriété personnelle", "Propriété du ménage", "Propriété du conjoint", "Propriété des parents"]
  disponibiliteCheck = [ "Tous les jours ou presque", "2 à 3 jours par semaine", "1 jour par semaine", "2 à 3 jours par mois", "1 jour par mois", "Moins d'un jour" ]
  pretALUSageCheck = [ "Oui", "Problème de stationnement", "État insatisfaisant", "Pas d'assurance", "Pas de contrôle technique", "Pas de carte grise" ]

  get habitudes(): FormArray {
    return this.formGroup.get('habitudes') as FormArray
  }

  get frequence(): FormArray {
    return this.formGroup.get('frequence') as FormArray
  }

  get perimetre(): FormArray {
    return this.formGroup.get('perimetre') as FormArray
  }

  get motif(): FormArray {
    return this.formGroup.get('motif') as FormArray
  }

  get abonnements(): FormArray {
    return this.formGroup.get('abonnements') as FormArray
  }

  get vehicules(): FormArray {
    return this.formGroup.get('vehicules') as FormArray
  }

  get proprietaires(): FormArray {
    return this.formGroup.get('proprietaires') as FormArray
  }

  get disponibilites(): FormArray {
    return this.formGroup.get('disponibilites') as FormArray
  }

  get pretALUsages(): FormArray {
    return this.formGroup.get('pretALUsages') as FormArray
  }

  getGroup(array: FormArray, i: number): FormGroup {
    return array.at(i) as FormGroup
  }
}