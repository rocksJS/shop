import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenedProductComponent } from './pages/opened-product/opened-product.component';

const routes: Routes = [{ path: '', component: OpenedProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenedProductRoutingModule {}
