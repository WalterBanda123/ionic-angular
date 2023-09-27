import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../provider/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) { }
  loginForm = this.formBuilder.group({
    'email': [''],
    'password': ['']
  })

  isLoading: boolean = false;
  isToastOpen: boolean = false;
  toastMessage: string = ''

  openToastHandler(isOpen: boolean): void {
    this.isToastOpen = isOpen
  }

  userSignIn(form: FormGroup): void {
    const { value: userData } = form
    this.isLoading = true;
    this.authService.userSignIn(userData).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.isLoading = false
          this.isToastOpen = true
          this.toastMessage = 'Login Successful'
          this.router.navigateByUrl('/home');
        }, 1500);
      },
      error: (err) => {
        this.toastMessage = 'Authentication failed'
        this.isLoading = false;
      }
    })

  }
  ngOnInit() {
  }

}
