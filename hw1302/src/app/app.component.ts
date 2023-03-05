import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpService ]
})

export class AppComponent {
  title = 'hw1302';
  prods: Product[] = [];
  
  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.getProducts().subscribe({next: (data: Product[]) => this.prods = data})
  }
}
