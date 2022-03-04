
/**
 * Models App
*/

export interface Information {
    id: number;
    profession: string;
    phone: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface Users {
    id: number;
    fullname: string;
    email: string;
    information:Information ;
    roles: Role[];
}