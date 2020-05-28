import { Component, OnInit } from '@angular/core';
import { NewOrder } from '../models/NewOrder';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  order: NewOrder;
  orderTypes = ['Delivery', 'Pick-up'];
  submitted = false;

  onSubmit() {this.submitted = true;}
  constructor() { }

  ngOnInit(): void {
  }

}
