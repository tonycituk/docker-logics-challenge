import { Component, Input } from '@angular/core';
import { HabitatRequest, initialHabitatRequest } from '../../models/habitat';

@Component({
  selector: 'app-create-habitat',
  templateUrl: './create-habitat.component.html',
})
export class CreateHabitatComponent {
  @Input() initialHabitat: HabitatRequest = initialHabitatRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
