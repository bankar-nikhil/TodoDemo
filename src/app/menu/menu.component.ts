import { Router } from '@angular/router';
import { HardcodedAuthService } from '../_services/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public hardcodedAuthService: HardcodedAuthService,
    private route: Router
  ) { }

  isUserLoggedIn: boolean = false;

  onLogoutClick(){
    sessionStorage.removeItem('authUser');
    this.route.navigate(['/login']);
  }

  ngOnInit(): void {
    console.log(" isUserLoggedIn => "+this.hardcodedAuthService.isUserLoggedIn());
  }

}
