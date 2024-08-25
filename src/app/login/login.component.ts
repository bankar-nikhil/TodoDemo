import { HardcodedAuthService } from '../_services/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,
    private hardcodedAuthService: HardcodedAuthService,
  ) { }

  username = '';
  password = '';

  invalidLogin = false;
  errorMessage = 'Invalid username or password!!!'

  onLoginClick(){
    console.log("LoginComponent username => "+this.username);
    if(this.hardcodedAuthService.authenticate(this.username, this.password)){
      this.route.navigate(['welcome',this.username]);
    }
    else{
      this.invalidLogin=true;
    }
  }

  ngOnInit(): void {
  }

}
