import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsPageComponent } from '../pages';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { CreateAnimalComponent } from './pages/create-animal/create-animal.component';
import { SuppliersPageComponent } from './pages/suppliers-page/suppliers-page.component';
import { EditSupplierComponent } from './pages/edit-supplier/edit-supplier.component';
import { CreateSupplierComponent } from './pages/create-supplier/create-supplier.component';
import { HabitatsPageComponent } from './pages/habitats-page/habitats-page.component';
import { EditHabitatComponent } from './pages/edit-habitat/edit-habitat.component';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { EditZookeeperComponent } from './pages/edit-zookeeper/edit-zookeeper.component';
import { ZookeepersPageComponent } from './pages/zookeepers-page/zookeeper-page.component';
import { CreateZookeeperComponent } from './pages/create-zookeeper/create-zookeeper.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalsPageComponent,
  },
  {
    path: 'animals/:id',
    component: EditAnimalComponent,
  },
  {
    path: 'createAnimal',
    component: CreateAnimalComponent,
  },
  {
    path: 'suppliers',
    component: SuppliersPageComponent,
  },
  {
    path: 'suppliers/:id',
    component: EditSupplierComponent
  },
  {
    path: 'createSupplier',
    component: CreateSupplierComponent,
  },
  {
    path: 'habitats',
    component: HabitatsPageComponent,
  },
  {
    path: 'habitats/:id',
    component: EditHabitatComponent,
  },
  {
    path: 'createHabitat',
    component: CreateHabitatComponent,
  },
  {
    path: 'zookeepers',
    component: ZookeepersPageComponent,
  },
  {
    path: 'zookeepers/:id',
    component: EditZookeeperComponent,
  },
  {
    path: 'createZookeeper',
    component: CreateZookeeperComponent,
  },
  {
    path: '**',
    redirectTo: 'animals',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
