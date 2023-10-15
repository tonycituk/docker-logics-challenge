import { Component, Input } from '@angular/core';
import { Animal, AnimalRequest, initialAnimalRequest, initialAnimalState } from '../../models/animal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from '../../services/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
})
export class AnimalFormComponent {
  @Input() animalData: AnimalRequest = initialAnimalRequest;

  constructor(private animalService: AnimalService, private router: Router) {}

  animalDataForm: FormGroup = new FormGroup({
    name: new FormControl(this.animalData.name, [Validators.required]),
    gender: new FormControl(this.animalData.gender, [Validators.required]),
    weight: new FormControl(this.animalData.weight, [Validators.required]),
    height: new FormControl(this.animalData.height, [Validators.required]),
    category: new FormControl(this.animalData.category, [Validators.required]),
    diet: new FormControl(this.animalData.diet, [Validators.required]),
    habitatId: new FormControl(this.animalData.habitatId, [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
  }

  create(): void {
    this.animalService.create(this.animalData).subscribe();
    this.router.navigate(['/admin/animals']);
  }

  get name() {
    return this.animalDataForm.get('name');
  }

  get gender() {
    return this.animalDataForm.get('gender');
  }

  get height() {
    return this.animalDataForm.get('height');
  }

  get weight() {
    return this.animalDataForm.get('weight');
  }

  get diet() {
    return this.animalDataForm.get('diet');
  }

  get category() {
    return this.animalDataForm.get('category');
  }

  get habitatId() {
    return this.animalDataForm.get('habitatId');
  }
}
