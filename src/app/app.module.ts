import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewItemsKitchenComponent } from './components/view-items-kitchen/view-items-kitchen.component'
import { LoginComponent } from './components/login/login.component';
import { ViewOrderWaiterComponent } from './components/view-order-waiter/view-order-waiter.component';
import { ViewRequestWaiterComponent } from './components/view-request-waiter/view-request-waiter.component';
import { ViewOrdersKitchenComponent } from './components/view-orders-kitchen/view-orders-kitchen.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsKitchenComponent,
    LoginComponent,
    ViewOrderWaiterComponent,
    ViewRequestWaiterComponent,
    ViewOrdersKitchenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
