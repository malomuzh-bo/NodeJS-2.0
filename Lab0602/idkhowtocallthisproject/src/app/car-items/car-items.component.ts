import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Cars } from '../mock-cars';

@Component({
  selector: 'app-car-items',
  templateUrl: './car-items.component.html',
  styleUrls: ['./car-items.component.css']
})
export class CarItemsComponent {
  cars = Cars;
  selectedCar : Car = {Id: 4, name: "Car4", description: "Description for car 4", pic_path: "https://img.pravda.com/images/doc/e/3/e37ffab-16tehnika.jpg"};
  onSelect(item: Car): void{
    this.selectedCar = item;
  }
  constructor() {  }
  ngOnInit(){

  }
}
