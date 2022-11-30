import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

@NgModule({
  declarations: [GalleryPageComponent],
  imports: [GalleryRoutingModule],
})
export class GalleryModule {}
