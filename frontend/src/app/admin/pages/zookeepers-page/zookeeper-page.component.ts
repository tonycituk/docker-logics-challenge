import { Component } from '@angular/core';
import { Zookeeper } from '../../models/zookeeper';
import { ZookeeperService } from '../../services/zookeeper.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-zookeeper-page',
  templateUrl: './zookeeper-page.component.html',
})
export class ZookeepersPageComponent {
    zookeepers: Zookeeper[] = [];

  constructor(private zookeeperService: ZookeeperService, private router: Router) {}

  ngOnInit(): void {
    this.getAllZookeepers();
  }

  getAllZookeepers(): void {
    this.zookeeperService.getAll().subscribe((res) => {
      this.zookeepers = res;
    });
  }

  delete(zookeeperId?: string): void {
    const id = Number(zookeeperId);
    this.zookeeperService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/zookeepers'])))
      .subscribe((res) => this.getAllZookeepers());
  }
}
