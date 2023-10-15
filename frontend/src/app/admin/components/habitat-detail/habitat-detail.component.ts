import { Component, Input } from '@angular/core';
import { Habitat, initialHabitatState } from '../../models/habitat';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HabitatService } from '../../services/habitat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-habitat-detail',
  templateUrl: './habitat-detail.component.html',
})
export class HabitatDetailComponent {
  @Input() habitatData: Partial<Habitat> = initialHabitatState;

  constructor(
    private habitatService: HabitatService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  habitatDataForm: FormGroup = new FormGroup({
    size: new FormControl(this.habitatData.size, [Validators.required]),
    capacity: new FormControl(this.habitatData.capacity, [Validators.required]),
    area: new FormControl(this.habitatData.area, [Validators.required]),
    foodPercentage: new FormControl(this.habitatData.foodPercentage, [Validators.required]),
    zookeepers: new FormControl(this.habitatData.zookeepers, [Validators.required]),
    animals: new FormControl(this.habitatData.animals, [Validators.required]),
  });

  ngOnInit(): void {
    Object.assign(this.habitatData, initialHabitatState);
  }

  ngOnDestroy(): void {
    Object.assign(this.habitatData, initialHabitatState);
  }

  update(): void {
    const habitatId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.habitatService
      .updateOne(habitatId, this.habitatData)
      .subscribe();
    this.router.navigate(['/admin/habitats']);
  }

  get size() {
    return this.habitatDataForm.get('size');
  }

  get capacity() {
    return this.habitatDataForm.get('capacity');
  }

  get area() {
    return this.habitatDataForm.get('area');
  }

  get foodPercentage() {
    return this.habitatDataForm.get('foodPercentage');
  }

  get zookeepers() {
    return this.habitatDataForm.get('zookeepers');
  }

  get animals() {
    return this.habitatDataForm.get('animals');
  }
}
