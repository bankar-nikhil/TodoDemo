import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../_services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) { }

  name = '';
  message:string = '';

  welcome(){
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      resp => this.handleSuccessResp(resp),
      error => this.handleErrorResp(error)
      
    );
  }

  handleSuccessResp(resp: any){
    console.log(resp);
    console.log("resp message => "+resp.message);
    this.message=resp.message;
  }

  handleErrorResp(error: any){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.message=error.error.message;
  }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
  }

}
