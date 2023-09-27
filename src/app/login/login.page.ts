import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  loginForm = this.formBuilder.group({
    'email': [''],
    'password': ['']
  })
  userSignIn(form:FormGroup):void{
    console.log('Form controls',form.controls);
    console.log(form.value);

  }
  ngOnInit() {
  }

}
