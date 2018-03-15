import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() food: {
    name: string,
    calories: number,
    image: string,
    quantity: number,
  }
  constructor() { }

  ngOnInit() {
  }

}
