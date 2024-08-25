import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../_services/data/welcome-data.service';
import { TodoDataService } from '../_services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todoList = [
    new Todo(1, "Task 11", false, new Date()),
    new Todo(2, "Task 22", false, new Date()),
    new Todo(3, "Task 33", false, new Date()),
    new Todo(4, "Task 44", false, new Date()),
    new Todo(5, "Task 55", false, new Date()),
  ]

  successMsg: string = '';
  errorMsg: string = '';

  constructor(
    private welcomeDataService: WelcomeDataService,
    private todoDataService: TodoDataService,
    private route: Router
  ) { }

  getMyTodos(){
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.getAllTodos("nikhil").subscribe(
      resp => this.handleSuccessResp(resp),
      error => this.handleErrorResp(error)
      
    );
  }


  retriveAllTodos(){
    this.todoDataService.retriveAllTodos("nikhil").subscribe(
      response=> {
        console.log(response)
        this.todoList=response;
      });
  }

  deleteTodo(id: number){
    this.successMsg="";
    this.errorMsg="";
    console.log(`delete todo ${id}`);
    this.todoDataService.deleteTodo("nikhil",id).subscribe(
      response=> {
        console.log(response);
        this.successMsg = `Delete of Todo ${id} Successful !!!`;
        this.retriveAllTodos();
      },
      error=> {
        console.log(error);
        this.errorMsg = `Delete of Todo ${id} Failed !!!`
      });
  }

  updateTodo(id: number){
    this.route.navigate(['todo', id]);
  }

  addTodo(){
    this.route.navigate(['todo', -1]);
  }

  handleSuccessResp(resp: any){
    console.log(resp);
    this.todoList = resp;
    console.log("resp message => "+resp.message);
    // this.message=resp.message;
  }

  handleErrorResp(error: any){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    // this.message=error.error.message;
  }

  ngOnInit(): void {
    this.retriveAllTodos();
  }

}
