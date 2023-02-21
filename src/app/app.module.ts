import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [AppComponent, ShoppingComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
