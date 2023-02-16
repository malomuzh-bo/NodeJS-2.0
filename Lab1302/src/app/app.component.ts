import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Good } from './good';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  goods: Good[] = [];
  ngOnInit(): void {
    this.http.getData().subscribe({next: (data: any) => this.goods=data["Berries"]});
  }
  title = 'Lab1302';
}
