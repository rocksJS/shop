import { NgModule } from '@angular/core';
import { OpenedProductRoutingModule } from './opened-product-routing.module';

import { OpenedProductComponent } from './pages/opened-product/opened-product.component';

@NgModule({
  declarations: [OpenedProductComponent],
  imports: [OpenedProductRoutingModule],
})
export class OpenedProductModule {}
