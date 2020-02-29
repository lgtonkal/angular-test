import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProdcutAddReactiveComponent } from './product/prodcut-add-reactive/prodcut-add-reactive.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'product-add-classic', component: ProductAddClassicComponent },
  { path: 'product-add-reactive', component: ProdcutAddReactiveComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/category/:categoryId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
