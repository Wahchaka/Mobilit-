import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-projet-achat',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projet-achat.html',
  styleUrl: './projet-achat.css',
})
export class ProjetAchat {
  @Input() formGroup!: FormGroup

  projetAchats: string[] = ["Non", "Voiture 5 places", "Voiture 2 places", "Voiturette", "Moto", "Scooter", "Vélo conventionnel", "Vélo électrique", "Trottinette"]
  projetLocations: string[] = ["Non", "Voiture 5 places", "Voiture 2 places", "Voiturette", "Moto", "Scooter", "Vélo conventionnel", "Vélo électrique", "Trottinette"]
  creditOuEmprunts: string[] = ["Oui", "Oui, selon la nécessité", "Non, manque de ressource", "Non, interdit bancaire", "Non, incident remboursement", "Non raison personnelle"]
  dettes: string[] = ["Non", "Oui, plan de surendettement", "Oui, dettes dans une auto-école", "Oui, dette liées au transport en commun"]
  decisionBudgets: string[] = ["Oui", "Non, tutelle", "Non, curatelle", "Non, gestion par un autre membre du foyer"]
  revenusAllocations: string[] = ["Aucun revenu", "Revenu du ménage", "Salaire", "RSA Revenu de Solidarité Active", "ASS Allocation Spécifique de Solidarité", "CEJ", "Prime d'activité", "ARE Allocation Retour à l'Emploi", "AAH Allocation Adulte Handicapé", "AEEH Allocation Education Enfant Handicapé", "Pension retraite", " ASPA Allocation de Solidarité aux Personnes Agées (minimum vieillesse)", "Pension alimentaire", "Allocation veuvage", "Allocation demandeur d'asile", "APL"]

  get projetAchat(): FormArray{
    return this.formGroup.get('projetAchat') as FormArray
  }

  get projetLocation(): FormArray{
    return this.formGroup.get('projetLocation') as FormArray
  }

  get CreditOuEmpruntEstCeUneAlternativePossiblePourVous(): FormArray{
    return this.formGroup.get('CreditOuEmpruntEstCeUneAlternativePossiblePourVous') as FormArray
  }

  get dette(): FormArray{
    return this.formGroup.get('dette') as FormArray
  }

  get decisionBudgetAvezVousLaGestionDeVotrePopreBudget(): FormArray{
    return this.formGroup.get('decisionBudgetAvezVousLaGestionDeVotrePopreBudget') as FormArray
  }

  get revenusAllocation(): FormArray{
    return this.formGroup.get('revenusAllocation') as FormArray
  }

  getGroup(arrayName: string, i: number): FormGroup {
    return (this.formGroup.get(arrayName) as FormArray).at(i) as FormGroup
}
}
