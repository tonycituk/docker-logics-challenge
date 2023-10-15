import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AnimalService } from './animal.service';
import { environment } from '../../../environments/environment';
import { Animal } from '../models/animal';
import { AnimalRequest } from '../models/animal';

describe('AnimalService', () => {
  let animalService: AnimalService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/animals`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    animalService = TestBed.inject(AnimalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(AnimalService).toBeTruthy();
  });

  it('#getAll should retrieve all animals', () => {
    let actualAnimals: Animal[] | undefined;

    const animals = [
      {
        id: 1,
        name: 'Snake',
        gender: 'Male',
        height: 65,
        weight: 100,
        category: 'REPTILES',
        diet: 'Carnivorous',
        habitatId: 1,
      },
      {
        id: 2,
        name: 'Lion',
        gender: 'Female',
        height: 55.3,
        weight: 95.6,
        category: 'MAMMALS',
        diet: 'Carnivorous',
        habitatId: 1,
      },
    ];

    animalService.getAll().subscribe((data) => {
      actualAnimals = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(animals);

    expect(actualAnimals).toEqual(animals);
  });

  it('#create should create a new animal', () => {
    let actualAnimal: Animal | undefined;

    const newAnimal: AnimalRequest = {
      name: 'Snake',
      gender: 'Male',
      height: 65.0,
      weight: 90.1,
      category: 'REPTILES',
      diet: 'Carnivorous',
      habitatId: 1,
    };

    animalService.create(newAnimal).subscribe((data) => {
      actualAnimal = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 1, ...newAnimal });

    expect(actualAnimal).toEqual({ id: 1, ...newAnimal });
  });

  it('#getOne should retrieve one animal by id', () => {
    let actualAnimal: Animal | undefined;

    const animal = {
      id: 5,
      name: 'Lion',
      gender: 'Female',
      height: 55.3,
      weight: 95.6,
      category: 'MAMMALS',
      diet: 'Carnivorous',
      habitatId: 1,
    };

    animalService.getOne(5).subscribe((data) => {
      actualAnimal = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(animal);

    expect(actualAnimal).toEqual(animal);
  });

  it('#updateOne should update one animal', () => {
    let actualAnimal: Animal | undefined;

    let expectedAnimal = {
      id: 6,
      name: 'Tiger',
      gender: 'Male',
      height: 50,
      weight: 90.5,
      category: 'MAMMALS',
      diet: 'Carnivorous',
      habitatId: 1,
    };

    const dataToUpdate = {
      name: 'Bengal tiger',
      gender: 'Female',
    };

    animalService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualAnimal = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedAnimal);

    expect(actualAnimal).toEqual(expectedAnimal);
  });

  it('#delete should remove a animal by id', () => {
    let deletedAnimal: Animal | undefined;

    const animal = {
      id: 2,
      name: 'Lion',
      gender: 'Female',
      height: 55.3,
      weight: 95.6,
      category: 'MAMMALS',
      diet: 'Carnivorous',
      habitatId: 1,
    };

    animalService.delete(2).subscribe((data) => {
      deletedAnimal = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/2`,
    });

    testRequest.flush(animal);

    expect(deletedAnimal).toEqual(animal);
  });
});
