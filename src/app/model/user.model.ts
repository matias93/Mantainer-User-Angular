
export class User {
  id:number
  name:string;
  email:string;
  password:string
  phone: Phone;
  constructor(id:number,name:string,email:string,password:string,phone:Phone){
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.phone = phone;
  }
}


export class Phone {
    number:string;
    citycode:string;
    contrycode:string;
    constructor(number:string,citycode:string,contrycode:string){
        this.number = number;
        this.citycode = citycode;
        this.contrycode = contrycode;
    }
}

export interface Chore {
    id: number;
    name: string;
    clientValue: number;
}

export interface Role {
    id: number;
    name: string;
}

export interface Users {
    id: number;
    fullname: string;
    email: string;
    chore: Chore;
    roles: Role[];
}