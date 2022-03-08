import { Component, OnInit } from '@angular/core';
import { UpdateUser, Users } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-detail-user',
  templateUrl: './sidebar-detail-user.component.html',
  styleUrls: ['./sidebar-detail-user.component.css']
})
export class SidebarDetailUserComponent implements OnInit {

  form!: FormGroup;
  
  public submit:boolean = false;
  public detail!: Users;

  positions = [
    {id: 1, profession: "Ejecutivo clientes"},
    {id: 2, profession: "Ejecutivo Comercial"},
    {id: 3, profession: "Contador"},
    {id: 4, profession: "Supervisor"},
    {id: 5, profession: "Gerente"}
  ]
  
  roles = [
    {id: 0, name: 'administrador'},
    {id: 1, name: 'Owner'},
    {id: 2, name: 'Editor'},
    {id: 3, name: 'Solo Lectura'},
    {id: 4, name: 'Seguridad'},
    {id: 5, name: 'Finanzas'},
    {id: 6, name: 'Operativo'}
  ]
  
  constructor(private _fb: FormBuilder, private _service:UserService) { 
    this.readingForm();
  }

  ngOnInit(): void {
    this._service.shared.pipe((take(1))).subscribe(data => {
          this.detail = data;
          this.form.patchValue({
            fullname: this.detail.fullname,
            email: this.detail.email,
            password: this.detail.password,
            information : this.detail.information,
            roles: this.detail.roles
        })
      })
  }

  readingForm(){
    this.form = this._fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      information: [{},Validators.required],
      roles: [[],Validators.required]
    });
  }
  
  get f() { return this.form.controls; }

  deleteUserApi(item:any){
    const userId = JSON.stringify(item.id);
    console.log(userId)
    this._service.deleteUser(userId).then(() => console.log('usuario eleimidado"""'
    ))
  }
   

  updateUserApi(id:any,form:any){
      try {
           this._service.updateUser(id,form).then(() => console.log('usuario actualizado'))
      } catch (error) {
        console.error(error);
      }
      
  }

  createDataForm(){
     const _form = new UpdateUser()
     const id =  this.detail.id.toString();
     _form.fullname = this.form.value.fullname;
     _form.email = this.form.value.email;
     _form.password = this.form.value.password;
     _form.information = this.form.value.information;
     _form.roles = this.form.value.roles;
     console.log('editar====>',_form)
     //this.updateUserApi(id,_form)
  }



}
