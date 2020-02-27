import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-classic',
  templateUrl: './product-add-classic.component.html',
  styleUrls: ['./product-add-classic.component.css'],
  providers: [CategoryService]
})
export class ProductAddClassicComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  model: Product = new Product();
  categories: Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    console.log(form.value);
  }

}
