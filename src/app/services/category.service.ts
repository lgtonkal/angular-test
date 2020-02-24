import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  path = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.path);
  }
}
