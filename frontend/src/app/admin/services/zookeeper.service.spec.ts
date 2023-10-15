import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';
import { ZookeeperService } from './zookeeper.service';
import { Zookeeper } from '../models/zookeeper';
import { ZookeeperRequest } from '../models/zookeeper';

describe('ZookeeperService', () => {
  let zookeeperService: ZookeeperService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/zookeepers`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    zookeeperService = TestBed.inject(ZookeeperService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(ZookeeperService).toBeTruthy();
  });

  it('#getAll should retrieve all zookeepers', () => {
    let actualZookeepers: Zookeeper[] | undefined;

    const zookeepers = [
      {
        id: 1,
        name: 'Juan',
        responsibility: 'USER',
        qualification: 'Psychology',
        salary: 3000,
        habitats: [],
      },
      {
        id: 2,
        name: 'Pedro',
        responsibility: 'USER',
        qualification: 'Biology',
        salary: 4000,
        habitats: [],
      },
    ];

    zookeeperService.getAll().subscribe((data) => {
      actualZookeepers = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(zookeepers);

    expect(actualZookeepers).toEqual(zookeepers);
  });

  it('#create should create a new zookeeper', () => {
    let actualZookeeper: Zookeeper | undefined;

    const newZookeeper: ZookeeperRequest = {
      name: 'Pedro',
      responsibility: 'USER',
      qualification: 'Biology',
      createdAt: Date.now() + '',
      updatedAt: Date.now() + '',
      salary: 4000,
      habitats: [],
    };

    zookeeperService.create(newZookeeper).subscribe((data) => {
      actualZookeeper = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 1, ...newZookeeper });

    expect(actualZookeeper).toEqual({ id: 1, ...newZookeeper });
  });

  it('#getOne should retrieve one zookeeper by id', () => {
    let actualZookeeper: Zookeeper | undefined;

    const zookeeper = {
      id: 5,
      name: 'Pedro',
      responsibility: 'ADMIN',
      qualification: 'Biology',
      createdAt: Date.now() + '',
      updatedAt: Date.now() + '',
      salary: 4000,
      habitats: [],
    };

    zookeeperService.getOne(5).subscribe((data) => {
      actualZookeeper = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(zookeeper);

    expect(actualZookeeper).toEqual(zookeeper);
  });

  it('#updateOne should update one zookeeper', () => {
    let actualZookeeper: Zookeeper | undefined;

    let expectedZookeeper = {
      id: 6,
      name: 'Pedro',
      responsibility: 'ADMIN',
      qualification: 'Biology',
      createdAt: Date.now() + '',
      updatedAt: Date.now() + '',
      salary: 4000,
      habitats: [],
    };

    const dataToUpdate = {
      name: 'Smith',
      Qualification: 'Biology',
    };

    zookeeperService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualZookeeper = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedZookeeper);

    expect(actualZookeeper).toEqual(expectedZookeeper);
  });

  it('#delete should remove a zookeeper by id', () => {
    let deletedZookeeper: Zookeeper | undefined;

    const zookeeper = {
      id: 6,
      name: 'Pedro',
      responsibility: 'ADMIN',
      qualification: 'Biology',
      createdAt: Date.now() + '',
      updatedAt: Date.now() + '',
      salary: 4000,
      habitats: [],
    };

    zookeeperService.delete(6).subscribe((data) => {
      deletedZookeeper = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/6`,
    });

    testRequest.flush(zookeeper);

    expect(deletedZookeeper).toEqual(zookeeper);
  });
});
