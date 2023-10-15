import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';

import { HabitatService } from './habitat.service';
import { Habitat, HabitatRequest } from '../models/habitat';

describe('HabitatService', () => {
  let habitatService: HabitatService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/habitats`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    habitatService = TestBed.inject(HabitatService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(HabitatService).toBeTruthy();
  });

  it('#getAll should retrieve all habitats', () => {
    let actualHabitats: Habitat[] | undefined;

    const habitats = [
      {
        id: 1,
        size: 10,
        capacity: 100,
        area: 'C',
        foodPercentage: 45.7,
        zookeepers: [],
        animals: [],
      },
      {
        id: 2,
        size: 10,
        capacity: 100,
        area: 'A',
        foodPercentage: 45.7,
        zookeepers: [],
        animals: [],
      },
    ];

    habitatService.getAll().subscribe((data) => {
      actualHabitats = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(habitats);

    expect(actualHabitats).toEqual(habitats);
  });

  it('#create should create a new habitat', () => {
    let actualHabitat: Habitat | undefined;

    const newHabitat: HabitatRequest = {
      size: 10,
      capacity: 100,
      area: 'C',
      foodPercentage: 45.7,
      zookeepers: [],
      animals: [],
    };

    habitatService.create(newHabitat).subscribe((data) => {
      actualHabitat = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 7, ...newHabitat });

    expect(actualHabitat).toEqual({ id: 7, ...newHabitat });
  });

  it('#getOne should retrieve one habitat by id', () => {
    let actualHabitat: Habitat | undefined;

    const habitat = {
      id: 2,
      size: 10,
      capacity: 100,
      area: 'A',
      foodPercentage: 45.7,
      zookeepers: [],
      animals: [],
    };

    habitatService.getOne(5).subscribe((data) => {
      actualHabitat = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(habitat);

    expect(actualHabitat).toEqual(habitat);
  });

  it('#updateOne should update one supplier', () => {
    let actualHabitat: Habitat | undefined;

    let expectedHabitat = {
      id: 6,
      size: 10,
      capacity: 100,
      area: 'A',
      foodPercentage: 45.7,
      zookeepers: [],
      animals: [],
    };

    const dataToUpdate = {
      size: 10,
      area: 'A',
    };

    habitatService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualHabitat = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedHabitat);

    expect(actualHabitat).toEqual(expectedHabitat);
  });

  it('#delete should remove a habitat by id', () => {
    let deletedHabitat: Habitat | undefined;

    const habitat = {
      id: 6,
      size: 10,
      capacity: 100,
      area: 'C',
      foodPercentage: 45.7,
      zookeepers: [],
      animals: [],
    };

    habitatService.delete(6).subscribe((data) => {
      deletedHabitat = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/6`,
    });

    testRequest.flush(habitat);

    expect(deletedHabitat).toEqual(habitat);
  });
});
