import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User,Users } from '../model/user.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private urlUsers = environment.apiUsers;
  
  private usersDB!: AngularFireList<Users>;
  
  /**
   * 
   * @param _api 
   */
  constructor(private _api:HttpClient, private _db: AngularFireDatabase) {
    this.usersDB = this._db.list('users', (ref) =>
    ref.orderByChild('name')
     );
  }

  
  
  getAllCollectionUsers():Observable<any> {
       return this.usersDB.snapshotChanges().pipe(
         map((changes) => {
          return changes.map((c) => ({
            id: c.payload.key,
            ...c.payload.val(),
          }));
         })
       )
     
  }

  getAllUsers():Observable<User[]>{
    return this._api.get<User[]>(`${this.urlUsers}/users`);
  };

}
