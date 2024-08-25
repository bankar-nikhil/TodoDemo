import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username: string, password: string){
    if(username=="nikhil" && password=="12345"){
      sessionStorage.setItem('authUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authUser');
  }
}
