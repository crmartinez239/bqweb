import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrderSentComponent } from './order-sent/order-sent.component';

const routes: Routes = [
  { path: '', redirectTo: 'neworder', pathMatch: 'full' },
  { path: 'neworder', component: NewOrderComponent },
  { path: 'orders', component: ViewOrdersComponent },
  { path: 'sent', component: OrderSentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 