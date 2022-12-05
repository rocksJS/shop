import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsSubscribitionComponent } from './components/news-subscribition/news-subscribition.component';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TranslateSelectorComponent } from 'src/app/shared/components/translate-selector/translate-selector.component';
import { ProductsApiService } from 'src/app/shared/services/api/productsApiService';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    NewsSubscribitionComponent,
  ],
  imports: [
    MainRoutingModule,
    MatIconModule,
    CommonModule,
    TranslateSelectorComponent,
  ],
  providers: [ProductsApiService],
})
export class MainModule {}
