import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() location: string;

  lat: number;
  lng: number;

  isPositionError: boolean = false;

  constructor(private mapService: MapService) {

  }

  mapReadyHandler(){
    this.mapService.getGeoLocation(this.location).subscribe(
      (coordinates)=>{
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      },
      (err) => this.isPositionError = true

    )
  }
  ngOnInit() {
  }

}
