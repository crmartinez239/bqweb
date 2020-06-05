import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-sent',
  templateUrl: './order-sent.component.html',
  styleUrls: ['./order-sent.component.css']
})
export class OrderSentComponent implements OnInit {

  order = {}
  orderId: string
  orderAccepted = false
  x = setInterval(() => { this.checkOrder(); }, 5000)

  constructor(private route: ActivatedRoute, private ordersService: OrdersService) { 
    this.route.queryParams.subscribe(params => {
      this.orderId = params.id
    })
  }

  ngOnInit(): void {
  }

  checkOrder(): void {
    if (!this.orderAccepted) {
      this.ordersService.getOrderById(this.orderId).subscribe((data: any) => {
        if (data.order.isnew === "0") {
          this.orderAccepted = true;
        }
      })
    }
  }

}
