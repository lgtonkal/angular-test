import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-prodcut-add-reactive',
  templateUrl: './prodcut-add-reactive.component.html',
  styleUrls: ['./prodcut-add-reactive.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProdcutAddReactiveComponent implements OnInit {

  constructor(
    private fromBuilder: FormBuilder, 
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService) { }

  productAddForm: FormGroup;
  product: Product = new Product();
  categories: Category[];

  createProductAddForm() {
    this.productAddForm = this.fromBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  add(){
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);

      this.productService.addProduct(this.product).subscribe(data => {
        if (data) {
          this.alertifyService.success(data.name + " added.");
        } else {
          this.alertifyService.error("Product could not be added!");
        }
      });
    }
  }

}
