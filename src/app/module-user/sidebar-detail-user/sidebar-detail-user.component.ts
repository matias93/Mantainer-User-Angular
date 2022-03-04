import { Component, OnInit } from '@angular/core';
import { CreateUser, Users } from 'src/app/model/user.model';
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
  
  constructor(private _fb: FormBuilder, private _service:UserService) { 
    this.readingForm();
  }

  ngOnInit(): void {
      
      this._service.shared.pipe((take(1))).subscribe(data => {
          this.detail = data;
          console.log('===>',data)
      })
   
  }

  readingForm(){
    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      position: ['',Validators.required],
      role: ['',Validators.required]
    });
  }
  
  get f() { return this.form.controls; }

  

  createDataForm(){
     const _form = new CreateUser()
     _form.id = Math.floor(Math.random() * 99);
     _form.fullname = this.form.value.name;
     _form.email = this.form.value.email;
     _form.position = this.form.value.position;
     _form.role = this.form.value.role;
     console.log('======>',_form);
    
  
  }

}
