import { Component, Input } from '@angular/core';
import { Supplier, initialSupplierState } from '../../models/supplier';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
})
export class SupplierDetailComponent {
  @Input() supplierData: Partial<Supplier> = initialSupplierState;

  constructor(
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  supplierDataForm: FormGroup = new FormGroup({
    name: new FormControl(this.supplierData.name, [Validators.required]),
    type: new FormControl(this.supplierData.type, [Validators.required]),
    email: new FormControl(this.supplierData.email, [Validators.required]),
    telephone: new FormControl(this.supplierData.telephone, [Validators.required]),
    address: new FormControl(this.supplierData.address, [Validators.required]),
  });

  ngOnInit(): void {
    Object.assign(this.supplierData, initialSupplierState);
  }

  ngOnDestroy(): void {
    Object.assign(this.supplierData, initialSupplierState);
  }

  update(): void {
    const supplierId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.supplierService
      .updateOne(supplierId, this.supplierData)
      .subscribe();
    this.router.navigate(['/admin/suppliers']);
  }

  get name() {
    return this.supplierDataForm.get('name');
  }

  get type() {
    return this.supplierDataForm.get('type');
  }

  get email() {
    return this.supplierDataForm.get('email');
  }

  get telephone() {
    return this.supplierDataForm.get('telephone');
  }

  get address() {
    return this.supplierDataForm.get('address');
  }
}
