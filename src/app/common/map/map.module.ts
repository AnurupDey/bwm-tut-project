import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { CommonModule } from '@angular/common';


import {AgmCoreModule } from '@agm/core';
import {MapService} from './map.service';
import { CamelizePipe } from 'ngx-pipes';
@NgModule({
  declarations: [
      MapComponent
  ],
  exports: [
      MapComponent
  ],
  imports: [
      CommonModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAUQ-tdm3m7EKzgMZwaF9UTW7NWM3-bJXE'
      })
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
})
export class MapModule { }
