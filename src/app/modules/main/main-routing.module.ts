import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GALLERY_PATH,
  INFO_PATH,
  PRODUCT_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./../products-list/products-list.module').then(
            (module) => module.ProductsListModule
          ),
      },
      {
        path: INFO_PATH.path,
        loadChildren: () =>
          import('./../info/info.module').then((module) => module.InfoModule),
      },
      {
        path: GALLERY_PATH.path,
        loadChildren: () =>
          import('./../gallery/gallery.module').then(
            (module) => module.GalleryModule
          ),
      },
      {
        path: PRODUCT_PATH.path,
        loadChildren: () =>
          import('../opened-product/opened-product.module').then(
            (module) => module.OpenedProductModule
          ),
      },
      { path: '**', redirectTo: '/' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
