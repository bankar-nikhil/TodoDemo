import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  executeHelloWorldBeanServiceWithPathVariable(name: string){
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/user-name/${name}`);
  }

  getAllTodos(name: string){
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/users/${name}/todos`);
  }
}
