import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'my-ag';

  //array (a list)
  tasks = [
    "Visit Ann",
    "Call Dad",
    "Go to the gym",
    "Wash the dishes",
    "Shop for the party"
  ]
  //Add input to array 
  add(Newtask:string) {
    this.tasks.push(Newtask)
  }

}
