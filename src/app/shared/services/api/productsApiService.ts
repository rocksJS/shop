import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable, Subscribable } from 'rxjs';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { environment } from 'src/environments/environment';
import { IProduct } from '../../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
  private endpoints = {
    products: 'products.json',
  };

  constructor(private http: HttpClient) {}

  public createproduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      environment.apiURL + this.endpoints.products,
      product
    );
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      environment.apiURL + this.endpoints.products
    );
  }
}
