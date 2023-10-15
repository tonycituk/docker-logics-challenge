import { Component, Input } from '@angular/core';
import { Zookeeper, ZookeeperRequest, initialZookeeperRequest, initialZookeeperState } from '../../models/zookeeper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ZookeeperService } from '../../services/zookeeper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zookeeper-form',
  templateUrl: './zookeeper-form.component.html',
})
export class ZookeeperFormComponent {
  @Input() zookeeperData: ZookeeperRequest = initialZookeeperRequest;

  constructor(private zookeeperService: ZookeeperService, private router: Router) {}

  zookeeperDataForm: FormGroup = new FormGroup({
    name: new FormControl(this.zookeeperData.name, [Validators.required]),
    responsibility: new FormControl(this.zookeeperData.responsibility, [Validators.required]),
    qualification: new FormControl(this.zookeeperData.qualification, [Validators.required]),
    salary: new FormControl(this.zookeeperData.salary, [Validators.required]),
    habitats: new FormControl(this.zookeeperData.habitats, [Validators.required]),
  });

  ngOnInit(): void {
  }

  create(): void {
    this.zookeeperService.create(this.zookeeperData).subscribe();
    this.router.navigate(['/admin/zookeepers']);
  }

  get name() {
    return this.zookeeperDataForm.get('name');
  }

  get responsibility() {
    return this.zookeeperDataForm.get('responsibility');
  }

  get qualification() {
    return this.zookeeperDataForm.get('qualification');
  }

  get salary() {
    return this.zookeeperDataForm.get('salary');
  }

  get habitats() {
    return this.zookeeperDataForm.get('habitats');
  }
}
