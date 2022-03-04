import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Users} from 'src/app/model/user.model';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

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

  form!: FormGroup;

  public viewUserCrud = {
    LIST_USER    : 'LIST_USER',
    CREATE_USER  : 'CREATE-USER',
    DETAIL_USER  : 'DETAIL_USER'
  }

  public viewState:any;

  public users:Users[] =[];
  public result:any;
  emailValid:any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void {
    this.form = new FormGroup(({
      name : new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern(this.emailValid)]),
      password: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      citycode: new FormControl('',Validators.required),
      contrycode: new FormControl('',Validators.required),
    }))

    
    
   
    this._service.getAllCollectionUsers().subscribe(res => {
       this.users = res;
       console.log('desde firebae====>',res);
    })
    
  }

  goFormUser(){
    this.viewState = this.viewUserCrud.CREATE_USER;
  }

  goBack(){
    this.viewState = this.viewUserCrud.LIST_USER;
  }
   
  
}
