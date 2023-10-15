import { Component, Input } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal, initialAnimalState } from '../../models/animal';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
})
export class EditAnimalComponent {
  @Input() animalEditable: Animal = initialAnimalState;
  constructor(
    private animalService: AnimalService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const animalId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.animalService.getOne(animalId).subscribe((res) => {
      this.animalEditable = res;
    });
  }

}
