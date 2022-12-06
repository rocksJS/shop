import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductsApiService } from 'src/app/shared/services/api/productsApiService';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss'],
})
export class ProductsListPageComponent implements OnInit {
  constructor(private productsApiService: ProductsApiService) {}

  public products?: IProduct[];

  ngOnInit(): void {
    this.productsApiService
      .getProducts()
      .pipe(
        map((product) => {
          // придумать как пропихнуть в каждый обьект в массиве айдишку, смотри консоль логи ниже
          console.log(product);
          console.log(Object.values(product));
          return Object.values(product);
        })
      )
      .subscribe((products) => (this.products = products));
  }

  public openProduct(id: any) {}
}
