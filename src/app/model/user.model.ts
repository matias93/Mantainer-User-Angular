
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

export class CreateUser {
    id?:number;
    fullname?:string;
    email?:string;
    position?:string;
    role?:string;
    constructor(id?:number,fullname?:string,email?:string,position?:string,role?:string){
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.position = position;
        this.role = role;
    }
}