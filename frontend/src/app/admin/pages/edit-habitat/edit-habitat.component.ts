import { Component, Input } from '@angular/core';
import { HabitatService } from '../../services/habitat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitat, initialHabitatState } from '../../models/habitat';

@Component({
  selector: 'app-edit-habitat',
  templateUrl: './edit-habitat.component.html',
})
export class EditHabitatComponent {
  @Input() habitatEditable: Habitat = initialHabitatState;
  constructor(
    private habitatService: HabitatService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const habitatId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.habitatService.getOne(habitatId).subscribe((res) => {
      this.habitatEditable = res;
    });
  }

}
