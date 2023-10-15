import { Component, Input } from '@angular/core';
import { SupplierRequest, initialSupplierRequest } from '../../models/supplier';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
})
export class CreateSupplierComponent {
  @Input() initialSupplier: SupplierRequest = initialSupplierRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
