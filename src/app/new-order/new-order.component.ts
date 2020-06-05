import { Component, OnInit } from '@angular/core';
import { FormHelpService } from '../form-help.service';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  
  currentOrderName = '';
  currentOrderType = -1;
  invalidForm = false;
  responseMessage = '';

  constructor(
    private formHelp: FormHelpService, 
    private orderService: OrdersService, 
    private route: Router) { }

  ngOnInit(): void {
  }

  createOrder(): void {
    if (this.currentOrderType != 0 && this.currentOrderType != 1) {
      this.invalidForm = true
      this.responseMessage = 'Please select order type'
      return
    }

    if (this.currentOrderName.trim().length === 0) {
      this.invalidForm = true
      this.responseMessage = 'Please enter order name'
      return
    }

    if (!this.formHelp.isAlphaNumeric(this.currentOrderName)) {
      this.invalidForm = true
      this.responseMessage = 'Names may only contain letters and numbers'
      return
    }

    let order: any
    this.orderService.sendOrder(this.currentOrderType.toString(), this.currentOrderName)
      .subscribe({
        next: data => {
          this.invalidForm = false
          this.route.navigateByUrl(`/sent?id=${data.order.id}`)
        },
        error: error => {
          this.invalidForm = true
          this.responseMessage = error.message
        }
      })
    }
    
}
