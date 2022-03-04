import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ValidateFormService } from 'src/app/service/validate-form.service';

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
     this.submit = true;
     console.log('enviar datos====0>',this.f)  
    
  
  }

}





