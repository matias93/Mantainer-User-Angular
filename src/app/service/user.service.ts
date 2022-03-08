import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map} from 'rxjs/operators';
import { Users } from '../model/user.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private dataShared = new BehaviorSubject<any>({});

  shared = this.dataShared.asObservable();


 private usersDB!: AngularFireList<Users>;
  
  /**
   * 
   * @param _db 
   */
  constructor( private _db: AngularFireDatabase) {
    this.usersDB = this._db.list('users', (ref) =>
    ref.orderByChild('name')
     );
  }
  
  /**
   * 
   * @param data 
   */
  sendDataShared(data:any){
    this.dataShared.next(data);
  }
  /**
   * 
   * @param user 
   * @returns 
   */
  createUserApi(user:any) {
    return this._db.list('users').push(user);
  }
  /**
   * 
   * @param id 
   * @returns 
   */
  deleteUser(id:any){
    return this._db.list('users').remove(id);
  }

  updateUser(id:string,user:any){
    return this._db.list('users').update(id,user)
  }

  /*editUser(id:any){
    return this._db.list('users').update(id)
  }*/
  
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
  
}
