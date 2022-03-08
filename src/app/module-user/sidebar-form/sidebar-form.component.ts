import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CreateUser } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-sidebar-form',
  templateUrl: './sidebar-form.component.html',
  styleUrls: ['./sidebar-form.component.css']
})
export class SidebarFormComponent implements OnInit {
  
  form!: FormGroup;

  @Input() viewUserCrud:any;
  
  
  public submit:boolean = false;
  public viewState:any;

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
  
  constructor(private _fb: FormBuilder,private _service:UserService) { 
    this.readingForm();
  }

  ngOnInit(): void {
    console.log('yyyy',this.viewUserCrud)
  }

  readingForm(){
    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      information: [{},Validators.required],
      roles: [[],Validators.required]
    });
  }
  
  get f() { return this.form.controls; }


  deleteForm(){
    this.viewState = this.viewUserCrud.LIST_USER;
  }

  
  sendUserToApi(form:any){
    if (form) {
      try {
        this._service.createUserApi(form).then(() => console.log('usuario creado exitosamente'))
      } catch (error) {
        console.error(error)
      }
    }
  }

  createDataForm(){
     const _form = new CreateUser()
     _form.id = Math.floor(Math.random() * 99);
     _form.fullname = this.form.value.name;
     _form.email = this.form.value.email;
     _form.password = this.form.value.password;
     _form.information = this.form.value.information;
     _form.roles = this.form.value.roles;
     console.log('======>',_form);
     console.log('edir=====>',this.f)
   // this.sendUserToApi(_form);
  }

}





