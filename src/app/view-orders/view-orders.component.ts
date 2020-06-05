import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orders = [];
  x = setInterval(() => { this.getOrders(); }, 10000);

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.getOrders().subscribe((data: any) => {
      this.orders = data.orders;
    })
  }

  clearOrders(): void {
    this.ordersService.clearOrders();
    this.getOrders();
  }
}
