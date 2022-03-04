import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Users } from '../model/user.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public showForm:boolean = true;

  private dataShared = new BehaviorSubject<any>(this.showForm);

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
