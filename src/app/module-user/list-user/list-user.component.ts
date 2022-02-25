import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User , Phone} from 'src/app/model/user.model';
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

  public users:User[] = [];
  public result:any;

  ngOnInit(): void {
    this.form = new FormGroup(({
      name : new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      citycode: new FormControl('',Validators.required),
      contrycode: new FormControl('',Validators.required),
    }))

    
    this.viewState = this.viewUserCrud.LIST_USER
    this._service.getAllUsers().subscribe((res) => {
      this.users = res;
    })
  }

  goFormUser(){
    this.viewState = this.viewUserCrud.CREATE_USER;
  }

  goBack(){
    this.viewState = this.viewUserCrud.LIST_USER;
  }
   
  createUserBody(){
    const id = Math.random();
    const name = this.form.value.name;
    const email = this.form.value.email;
    const password = this.form.value.password;
    const number = this.form.value.number;
    const citycode = this.form.value.citycode;
    const contrycode = this.form.value.contrycode;
    const phone = new Phone(number,citycode,contrycode);
    const user = new User(id,name,email,password,phone);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Usuario Creado :)',
      showConfirmButton: false,
      timer: 1900
    })
    this.users.push(user);
    this.viewState =  this.viewUserCrud.LIST_USER;
  };
  /**
   * 
   * @param id 
   */
  deleteUserList(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta Seguro de Eliminar el Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id !== id)
        swalWithBootstrapButtons.fire(
          'Usuario Eliminado!',
          'Usuario eliminado de la lista'
        )
      } else if (
       result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Acción Cancelada',
          'Se eleigio no eliminar el Usuario'
        )
      }
    })
  }

}
