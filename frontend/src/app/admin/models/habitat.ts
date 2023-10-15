import { Animal } from "./animal";
import { Zookeeper } from "./zookeeper";

export interface Habitat {
    id?: string;
    size: number;
    capacity: number;
    area: string;
    foodPercentage: number;
    zookeepers: Zookeeper[];
    animals: Animal[];
}

export type HabitatRequest = Omit<Habitat, 'id'>;

export const initialHabitatState: Habitat = {
    id: '',
    size: 0,
    capacity: 0,
    area: '',
    foodPercentage: 0,
    zookeepers: [],
    animals: [],
};

export const initialHabitatRequest: HabitatRequest = {
    size: 0,
    capacity: 0,
    area: '',
    foodPercentage: 0,
    zookeepers: [],
    animals: [],
};