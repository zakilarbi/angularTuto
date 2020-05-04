import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  @Input() product;                             // what does it mean decorator ?
  @Output() notify = new EventEmitter();        // decorator output ?

  constructor() { }

  ngOnInit() {
  }

  show() {
    window.alert('Notify the price');
  }

}
