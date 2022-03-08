
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
    password:any;
    information:Information | any ;
    roles: Role[];
}

export class CreateUser {
    id?:number;
    fullname?:string;
    email?:string;
    password?:any;
    information?:string;
    roles?:string;
    constructor(id?:number,fullname?:string,email?:string,password?:any,information?:any,roles?:string){
        this.id = id;
        this.fullname = fullname;
        this.password = password;
        this.email = email;
        this.information = information;
        this.roles = roles;
    }
}

export class UpdateUser {
    fullname?:string;
    email?:string;
    password?:any;
    information?:string;
    roles?:string;
    constructor(fullname?:string,email?:string,password?:any,information?:any,roles?:string){
        this.fullname = fullname;
        this.password = password;
        this.email = email;
        this.information = information;
        this.roles = roles;
    }
}