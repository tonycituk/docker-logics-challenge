import { Component, Input } from '@angular/core';
import { AnimalRequest, initialAnimalRequest, initialAnimalState } from '../../models/animal';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
})
export class CreateAnimalComponent {
  @Input() initialAnimal: AnimalRequest = initialAnimalRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
