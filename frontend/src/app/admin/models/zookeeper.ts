import { Habitat } from "./habitat";

export interface Zookeeper {
    id?: string;
    name: string;
    responsibility: string;
    qualification: string;
    salary: number;
    createdAt: string;
    updatedAt: string;
    habitats: Habitat[];
}

export type ZookeeperRequest = Omit<Zookeeper, 'id'>;

export const initialZookeeperState: Zookeeper = {
    id: '',
    name: '',
    responsibility: '',
    qualification: '',
    salary: 0,
    createdAt:  '',
    updatedAt: '',
    habitats: [],
};

export const initialZookeeperRequest: ZookeeperRequest = {
    name: '',
    responsibility: '',
    qualification: '',
    salary: 0,
    createdAt: '',
    updatedAt: '',
    habitats: [],
};