import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';
import { SupplierService } from './supplier.service';
import { Supplier } from '../models/supplier';
import { SupplierRequest } from '../models/supplier';

describe('SupplierService', () => {
  let supplierService: SupplierService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/suppliers`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    supplierService = TestBed.inject(SupplierService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(SupplierService).toBeTruthy();
  });

  it('#getAll should retrieve all suppliers', () => {
    let actualSuppliers: Supplier[] | undefined;

    const suppliers = [
      {
        id: 1,
        name: 'John',
        type: 'service',
        email: 'john@gmail.com',
        telephone: '989434333',
        address: '2nd avenue',
      },
      {
        id: 2,
        name: 'doe',
        type: 'product',
        email: 'doe@example.com',
        telephone: '9888434589',
        address: '27th street',
      },
    ];

    supplierService.getAll().subscribe((data) => {
      actualSuppliers = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(suppliers);

    expect(actualSuppliers).toEqual(suppliers);
  });

  it('#create should create a new supplier', () => {
    let actualSupplier: Supplier | undefined;

    const newSupplier: SupplierRequest = {
      name: 'John',
      type: 'service',
      email: 'john@gmail.com',
      telephone: '989434333',
      address: '2nd avenue',
    };

    supplierService.create(newSupplier).subscribe((data) => {
      actualSupplier = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 1, ...newSupplier });

    expect(actualSupplier).toEqual({ id: 1, ...newSupplier });
  });

  it('#getOne should retrieve one supplier by id', () => {
    let actualSupplier: Supplier | undefined;

    const supplier = {
      id: 5,
      name: 'John',
      type: 'service',
      email: 'john@gmail.com',
      telephone: '989434333',
      address: '2nd avenue',
    };

    supplierService.getOne(5).subscribe((data) => {
      actualSupplier = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(supplier);

    expect(actualSupplier).toEqual(supplier);
  });

  it('#updateOne should update one supplier', () => {
    let actualSupplier: Supplier | undefined;

    let expectedSupplier = {
      id: 6,
      name: 'doe',
      type: 'product',
      email: 'doe@example.com',
      telephone: '9888434589',
      address: '27th street',
    };

    const dataToUpdate = {
      name: 'Smith',
      type: 'service',
    };

    supplierService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualSupplier = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedSupplier);

    expect(actualSupplier).toEqual(expectedSupplier);
  });

  it('#delete should remove a supplier by id', () => {
    let deletedSupplier: Supplier | undefined;

    const supplier = {
      id: 6,
      name: 'John',
      type: 'service',
      email: 'john@gmail.com',
      telephone: '989434333',
      address: '2nd avenue',
    };

    supplierService.delete(6).subscribe((data) => {
      deletedSupplier = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/6`,
    });

    testRequest.flush(supplier);

    expect(deletedSupplier).toEqual(supplier);
  });
});
