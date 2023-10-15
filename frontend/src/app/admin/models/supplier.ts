export interface Supplier {
    id?: string;
    name: string;
    type: string;
    email: string;
    telephone: string;
    address: string;
}

export type SupplierRequest = Omit<Supplier, 'id'>;

export const initialSupplierState: Supplier = {
    id: '',
    name: '',
    type: '',
    email: '',
    telephone: '',
    address: '',
};

export const initialSupplierRequest: SupplierRequest = {
    name: '',
    type: '',
    email: '',
    telephone: '',
    address: '',
};