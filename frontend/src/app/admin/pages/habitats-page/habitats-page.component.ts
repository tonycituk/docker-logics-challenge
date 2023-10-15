import { Component } from '@angular/core';
import { Habitat } from '../../models/habitat';
import { HabitatService } from '../../services/habitat.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-habitats-page',
  templateUrl: './habitats-page.component.html',
})
export class HabitatsPageComponent {
  habitats: Habitat[] = [];

  constructor(private habitatService: HabitatService, private router: Router) {}

  ngOnInit(): void {
    this.getAllHabitats();
  }

  getAllHabitats(): void {
    this.habitatService.getAll().subscribe((res) => {
      this.habitats = res;
    });
  }

  delete(habitatId?: string): void {
    const id = Number(habitatId);
    this.habitatService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/habitats'])))
      .subscribe((res) => this.getAllHabitats());
  }
}
