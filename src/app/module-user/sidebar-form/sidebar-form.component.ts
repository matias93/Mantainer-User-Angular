import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CreateUser } from 'src/app/model/user.model';


@Component({
  selector: 'app-sidebar-form',
  templateUrl: './sidebar-form.component.html',
  styleUrls: ['./sidebar-form.component.css']
})
export class SidebarFormComponent implements OnInit {
  
  form!: FormGroup;
  
  public submit:boolean = false;
  
  constructor(private _fb: FormBuilder) { 
    this.readingForm();
  }

  ngOnInit(): void {
   
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





