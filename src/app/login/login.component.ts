import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = new User();
  
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private alertifyService: AlertifyService
  ) { 
    this.loginForm = this.fb.group({
      username: ["",Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);

      let result = this.accountService.login(this.user);

      if(result){
        this.router.navigate(["products"]);
      } else {
        this.alertifyService.error("Username or password wrong :(");
      }
    }
  }

}
