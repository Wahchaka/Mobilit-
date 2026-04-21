import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-savoir-bouger',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './savoir-bouger.html',
  styleUrl: './savoir-bouger.css',
})
export class SavoirBouger {
  @Input() formGroup!: FormGroup

  get ecouteComprehensionOral(): FormArray{
    return this.formGroup.get('ecouteComprehensionOral') as FormArray
  }

  get parlerExpressionOral(): FormArray{
    return this.formGroup.get('parlerExpressionOral') as FormArray
  }

  get lireComprehensionEcrite(): FormArray{
    return this.formGroup.get('lireComprehensionEcrite') as FormArray
  }

  ecrireExpressionEcrite(): FormArray{
    return this.formGroup.get('ecrireExpressionEcrite') as FormArray
  }

  get maitreChiffresEtEmploiDuTemps(): FormArray{
    return this.formGroup.get('maitreChiffresEtEmploiDuTemps') as FormArray
  }

  get difficultesDApprentissage(): FormArray{
    return this.formGroup.get('difficultesDApprentissage') as FormArray
  }

  get psychoSensorielPratiqueSportInstrument(): FormArray{
    return this.formGroup.get('psychoSensorielPratiqueSportInstrument') as FormArray
  }

  get accesAppareilInformatiquePersonnels(): FormArray{
    return this.formGroup.get('accesAppareilInformatiquePersonnels') as FormArray
  }

  get accesInternet(): FormArray{
    return this.formGroup.get('accesInternet') as FormArray
  }

  get difficultesAvecMaitriseDesAppareilsInformatiques(): FormArray{
    return this.formGroup.get('difficultesAvecMaitriseDesAppareilsInformatiques') as FormArray
  }

  get difficultesAvecMaitriseInternetApplication(): FormArray{
    return this.formGroup.get('difficultesAvecMaitriseInternetApplication') as FormArray
  }

  get eprouvezVousDesDifficultesPourDifferencier(): FormArray{
    return this.formGroup.get('eprouvezVousDesDifficultesPourDifferencier') as FormArray
  }

  get eprouvezVousDesDifficultesAVOusRepererAvec(): FormArray{
    return this.formGroup.get('eprouvezVousDesDifficultesAVOusRepererAvec') as FormArray
  }

  get commentEstimezVousUnTempsDeTrajet(): FormArray{
    return this.formGroup.get('commentEstimezVousUnTempsDeTrajet') as FormArray
  }

  get commentEstilezVousLesCoutLiesALaMobilite(): FormArray{
    return this.formGroup.get('commentEstilezVousLesCoutLiesALaMobilite') as FormArray
  }
  
  getGroup(arrayName: string, i: number): FormGroup{
    return (this.formGroup.get(arrayName) as FormArray).at(i) as FormGroup
  }
}