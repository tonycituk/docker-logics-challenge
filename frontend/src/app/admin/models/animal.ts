export interface Animal {
  id?: string;
  name: string;
  gender: string;
  height: number;
  weight: number;
  category: string;
  diet: string;
  habitatId: number;
}

export type AnimalRequest = Omit<Animal, 'id'>;

export const initialAnimalState: Animal = {
  id: '',
  name: '',
  gender: '',
  height: 0,
  weight: 0,
  category: '',
  diet: '',
  habitatId: 0,
};

export const initialAnimalRequest: AnimalRequest = {
  name: '',
  gender: '',
  height: 0,
  weight: 0,
  category: '',
  diet: '',
  habitatId: 0,
};
