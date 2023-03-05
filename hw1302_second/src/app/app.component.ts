import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpService ]
})
export class AppComponent {
  title = 'hw1302_second';
  user: User = new User("","");
  users: User[] = [];
  message: string | undefined;
  isDone: boolean = false;

  constructor(private http:HttpService){}

  submit(user:User){
    this.http.getData(user).subscribe((data: any) => {
      this.message = data;
      this.isDone = true;
    },
      error => console.error()
    )
  }
}
