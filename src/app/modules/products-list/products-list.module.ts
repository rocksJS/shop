import { NgModule } from '@angular/core';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
  declarations: [ProductsListPageComponent],
  imports: [ProductsListRoutingModule],
})
export class ProductsListModule {}
