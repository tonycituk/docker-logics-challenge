import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-suppliers-page',
  templateUrl: './suppliers-page.component.html',
})
export class SuppliersPageComponent {
  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService, private router: Router) {}

  ngOnInit(): void {
    this.getAllSuppliers();
  }

  getAllSuppliers(): void {
    this.supplierService.getAll().subscribe((res) => {
      this.suppliers = res;
    });
  }

  delete(supplierId?: string): void {
    const id = Number(supplierId);
    this.supplierService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/suppliers'])))
      .subscribe((res) => this.getAllSuppliers());
  }
}
