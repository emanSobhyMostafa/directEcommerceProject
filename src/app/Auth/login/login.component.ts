import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  loading = false
  submitted = false
  constructor(private fromBuilder: FormBuilder, private router: Router, private authservice: AuthService) {
    this.loginForm = this.fromBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }
  ngOnInit(): void {
  }

  get loginFormControl() {
    return this.loginForm.controls
  }
  onSubmit() {
    const user = this.loginFormControl.userName.value
    const pass = this.loginFormControl.password.value


    this.submitted = true
    if (this.loginForm.invalid) {
      return;


    }

    this.authservice.login(user, pass)

  }
  reg() {
    return this.router.navigate(['auth/register'])
  }

}
