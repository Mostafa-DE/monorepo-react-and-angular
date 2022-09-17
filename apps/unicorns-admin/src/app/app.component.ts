import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "@nx-monorepo/unicorns/util-interfaces";

@Component({
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: IProduct[] = [
    {
      "id": 1,
      "name": "List 1",
      "image": "https://source.unsplash.com/1600x900/?cat",
      "description": "This is item #1",
      "price": 100
    },
    {
      "id": 2,
      "name": "List 2",
      "image": "https://source.unsplash.com/1600x900/?dog",
      "description": "This is item #2",
      "price": 200
    },
    {
      "id": 3,
      "name": "List 3",
      "image": "https://source.unsplash.com/1600x900/?bird",
      "description": "This is item #3",
      "price": 300
    },
    {
      "id": 4,
      "name": "Test",
      "image": "https://source.unsplash.com/1600x900/?home",
      "description": "This is item #4",
      "price": 400
    }
  ];

  constructor(private http: HttpClient) {
    // this.http.get<IProduct[]>('http://localhost:3001/products').subscribe((products) => {
    //   this.products = products;
    // });
  }

}
