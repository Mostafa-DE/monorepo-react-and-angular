import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "@nx-monorepo/unicorns/util-interfaces";

@Component({
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: IProduct[] = [];

  constructor(private http: HttpClient) {
    this.http.get<IProduct[]>('http://localhost:3001/products').subscribe((products) => {
      this.products = products;
    });
  }

}
