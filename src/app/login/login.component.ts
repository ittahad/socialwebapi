import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  @ViewChild("loginFormDirective") loginFormDirective;

  constructor(private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private loginService: LoginService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    var info = this.loginForm.value;
    var userId = info.username;
    this.cookieService.delete("test_loggedin_user");
    this.cookieService.set("test_loggedin_user", userId);

    let payload = {
      username: userId
    };

    this.loginService.loginUser(payload)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })

    this.router.navigate(['/home']);
  }

  createForm()
  {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required]]
    });
  }


}
