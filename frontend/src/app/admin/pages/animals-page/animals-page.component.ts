import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
})
export class AnimalsPageComponent {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    this.getAllAnimals();
  }

  getAllAnimals(): void {
    this.animalService.getAll().subscribe((res) => {
      this.animals = res;
    });
  }

  delete(animalId?: string): void {
    const id = Number(animalId);
    this.animalService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/animals'])))
      .subscribe((res) => this.getAllAnimals());
  }
}
