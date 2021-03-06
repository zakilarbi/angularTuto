import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientDetailsComponent } from "./client-details/client-details.component";
import { CartComponent } from "./cart/cart.component";
import { MapComponent } from "./map/map.component";
import { ShippingComponent } from "./shipping/shipping.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "kuiz-194b1"),
    AngularFireDatabaseModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "clients/:clientId", component: ClientDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "map", component: MapComponent },
      { path: "shipping", component: ShippingComponent },
    ]),
  ],

  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ClientListComponent,
    ClientDetailsComponent,
    CartComponent,
    MapComponent,
    ShippingComponent,
  ],
  bootstrap: [CartComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
