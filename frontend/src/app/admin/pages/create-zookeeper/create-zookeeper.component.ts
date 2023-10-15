import { Component, Input } from '@angular/core';
import { ZookeeperRequest, initialZookeeperRequest } from '../../models/zookeeper';

@Component({
  selector: 'app-create-zookeeper',
  templateUrl: './create-zookeeper.component.html',
})
export class CreateZookeeperComponent {
  @Input() initialZookeeper: ZookeeperRequest = initialZookeeperRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
