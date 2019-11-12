import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";
import { splitClasses } from "@angular/compiler";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  myTodoList: Todo[] = [
    { task: "clean room", completed: true },
    { task: "wash car", completed: false },
    { task: "study javascript", completed: true }
  ];
  newTask: Todo = {
    task: "",
    completed: false
  };
  addTask() {
    this.myTodoList.push(this.newTask);
    this.newTask = {
      task: "",
      completed: false
    };
  }

  filterValue: string = "";

  filterTasks() {
    // console.log("working...");
    return this.myTodoList.filter(t => t.task.startsWith(this.filterValue));
  }
  removeTask(index: number) {
    console.log("removeTask");
    this.myTodoList.splice(index, 1);
  }
  markComplete(index: number) {
    console.log("markedComplete");
    let completeTask = this.myTodoList[index];
    console.log(completeTask);
    completeTask.completed = true;
  }
}
