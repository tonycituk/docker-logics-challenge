import { Component, Input } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier, initialSupplierState } from '../../models/supplier';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
})
export class EditSupplierComponent {
  @Input() supplierEditable: Supplier = initialSupplierState;
  constructor(
    private supplierService: SupplierService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const supplierId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.supplierService.getOne(supplierId).subscribe((res) => {
      this.supplierEditable = res;
    });
  }

}
