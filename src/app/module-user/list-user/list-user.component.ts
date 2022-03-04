import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Users} from 'src/app/model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  /**
   * 
   * @param _service 
   */
  constructor(private _service:UserService) { }

  public showDetail:boolean = false;

  public viewUserCrud = {
    LIST_USER    : 'LIST_USER',
    CREATE_USER  : 'CREATE-USER',
    DETAIL_USER  : 'DETAIL_USER'
  }

  public viewState:any;
  public showForm:boolean = false;

  public users:Users[] =[];
 
  

  ngOnInit(): void {
    this._service.getAllCollectionUsers().subscribe(res => {
       this.users = res;
       console.log('desde firebae====>',res);
    })
    
  }

  goFormUser(){
    this.viewState = this.viewUserCrud.CREATE_USER;
  }

  goFormDetail(item:any){
    this.showForm = true
    let data = item;
    this._service.sendDataShared(data);
  }

  goBack(){
    this.viewState = this.viewUserCrud.LIST_USER;
  }

  
   
  
}
