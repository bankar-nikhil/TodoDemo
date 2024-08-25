import { HardcodedAuthService } from '../_services/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit(): void {
    this.hardcodedAuthService.logout();
  }

}
