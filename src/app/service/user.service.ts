import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * 
   * @param _api 
   */
  constructor(private _api:HttpClient) { }

  private urlUsers = environment.apiUsers;


  getAllUsers():Observable<User[]>{
    return this._api.get<User[]>(`${this.urlUsers}/users`);
  };

}
