import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { CreateAnimalComponent } from './pages/create-animal/create-animal.component';
import { HttpClientModule } from '@angular/common/http';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { CreateSupplierComponent } from './pages/create-supplier/create-supplier.component';
import { EditSupplierComponent } from './pages/edit-supplier/edit-supplier.component';
import { HabitatDetailComponent } from './components/habitat-detail/habitat-detail.component';
import { HabitatFormComponent } from './components/habitat-form/habitat-form.component';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { EditHabitatComponent } from './pages/edit-habitat/edit-habitat.component';
import { ZookeeperDetailComponent } from './components/zookeeper-detail/zookeeper-detail.component';
import { EditZookeeperComponent } from './pages/edit-zookeeper/edit-zookeeper.component';
import { ZookeeperFormComponent } from './components/zookeeper-form/zookeeper-form.component';
import { CreateZookeeperComponent } from './pages/create-zookeeper/create-zookeeper.component';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    EditAnimalComponent,
    AnimalFormComponent,
    CreateAnimalComponent,
    SupplierDetailComponent,
    EditSupplierComponent,
    SupplierFormComponent,
    CreateSupplierComponent,
    HabitatDetailComponent,
    EditHabitatComponent,
    HabitatFormComponent,
    CreateHabitatComponent,
    ZookeeperDetailComponent,
    EditZookeeperComponent,
    ZookeeperFormComponent,
    CreateZookeeperComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
