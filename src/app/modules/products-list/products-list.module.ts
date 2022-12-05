import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsApiService } from 'src/app/shared/services/api/productsApiService';
import { ProductComponent } from './components/product/product.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
  declarations: [ProductsListPageComponent, ProductComponent],
  imports: [ProductsListRoutingModule, CommonModule],
  providers: [ProductsApiService],
})
export class ProductsListModule {}
