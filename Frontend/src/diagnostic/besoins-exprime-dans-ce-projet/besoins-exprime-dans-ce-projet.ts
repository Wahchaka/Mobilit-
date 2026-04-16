import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-besoins-exprime-dans-ce-projet',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './besoins-exprime-dans-ce-projet.html',
  styleUrl: './besoins-exprime-dans-ce-projet.css',
})
export class BesoinsExprimeDansCeProjet {
  @Input() formGroup!: FormGroup

  get besoins(): FormArray{
    return this.formGroup.get('besoins') as FormArray
  }

  get pourVousLaMobiliteCEstPlutotSynonymeDe(): FormArray{
    return this.formGroup.get('pourVousLaMobiliteCEstPlutotSynonymeDe') as FormArray
  }

  get pourVousLamobiliteRenvoieAVosExperienceDeDeplacement(): FormArray{
    return this.formGroup.get('pourVousLamobiliteRenvoieAVosExperienceDeDeplacement') as FormArray
  }

  get pourVousLeTempsDeDeplacementRepresente(): FormArray{
    return this.formGroup.get('pourVousLeTempsDeDeplacementRepresente') as FormArray
  }

  get avezVousDesCraitesLieesALaMobilite(): FormArray{
    return this.formGroup.get('avezVousDesCraitesLieesALaMobilite') as FormArray
  }

  get voitureAdjectifs(): FormArray{
    return this.formGroup.get('voitureAdjectifs') as FormArray
  }

  get transportEnCommunAdjectif(): FormArray{
    return this.formGroup.get('transportEnCommunAdjectif') as FormArray
  }

  get VeloAdjectif(): FormArray{
    return this.formGroup.get('VeloAdjectif') as FormArray
  }

  get marcheAdjectif(): FormArray{
    return this.formGroup.get('marcheAdjectif') as FormArray
  }

  getGroup(arrayName: string, i: number): FormGroup{
    return (this.formGroup.get(arrayName) as FormArray).at(i) as FormGroup
  }
}
