import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/Product';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  path = "https://jsonplaceholder.typicode.com/posts";

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.path);
  }
}
