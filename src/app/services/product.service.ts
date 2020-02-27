import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/Product';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  path = "http://localhost:3000/products";

  getProducts(categoryId: number): Observable<Product[]> {
    let newPath = this.path;

    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }
    return this.httpClient.get<Product[]>(newPath);
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    };

    return this.httpClient.post<Product>(this.path, product, httpOptions);

  }
}
