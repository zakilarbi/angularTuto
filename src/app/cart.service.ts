import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AngularFireDatabase } from "angularfire2/database";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items = [];

  constructor(private http: HttpClient, public db: AngularFireDatabase) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.db.list("/quizzes").valueChanges();
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
