import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  { path: 'neworder', component: NewOrderComponent },
  { path: 'orders', component: ViewOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 