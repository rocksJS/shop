import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsSubscribitionComponent } from './components/news-subscribition/news-subscribition.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    NewsSubscribitionComponent,
  ],
  imports: [MainRoutingModule, MatIconModule],
})
export class MainModule {}
