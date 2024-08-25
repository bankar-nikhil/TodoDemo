import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../_services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoDataService: TodoDataService,

  ) { 
  }

  id!: number;

  public todo!: Todo;

  saveTodo(){
    if(this.id === -1){

      console.log(this.todo.id);
      console.log(this.todo.description);
      console.log(this.todo.completed);
      console.log(this.todo.targetDate);

      this.todoDataService.createTodo("nikhil", this.todo).subscribe(
        response=> {
          console.log(response);
          this.router.navigate(['todos']);
        });
    }
    else{
      this.todoDataService.updateTodo("nikhil",this.todo.id, this.todo).subscribe(
        response=> {
          console.log(response);
          this.router.navigate(['todos']);
        });
    }
  }

  retriveTodo(id: number){
    if(id != -1){
      this.todoDataService.retriveTodo("nikhil",id).subscribe(
        response=> {
          console.log(response);
          this.todo=response;
        });
    }
  }


  ngOnInit(): void {
    // this.id=Number(this.route.snapshot.params['id']);
    this.id=this.route.snapshot.params['id'];
    console.log("TodoComponent => "+this.id);
    this.todo = new Todo(this.id, '', false, new Date());
    this.retriveTodo(this.id);
  }

}
