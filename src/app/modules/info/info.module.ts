import { NgModule } from '@angular/core';
import { InfoRoutingModule } from './info-routing.module';
import { InfoPageComponent } from './pages/info-page/info-page.component';

@NgModule({
  declarations: [InfoPageComponent],
  imports: [InfoRoutingModule],
})
export class InfoModule {}
