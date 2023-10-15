import { Component, Input } from '@angular/core';
import { ZookeeperService } from '../../services/zookeeper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Zookeeper, initialZookeeperState } from '../../models/zookeeper';

@Component({
  selector: 'app-edit-zookeeper',
  templateUrl: './edit-zookeeper.component.html',
})
export class EditZookeeperComponent {
  @Input() zookeeperEditable: Zookeeper = initialZookeeperState;
  constructor(
    private zookeeperService: ZookeeperService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const zookeeperId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.zookeeperService.getOne(zookeeperId).subscribe((res) => {
      this.zookeeperEditable = res;
    });
  }

}
