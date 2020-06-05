import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrderSentComponent } from './order-sent/order-sent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NewOrderComponent,
    ViewOrdersComponent,
    OrderSentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
