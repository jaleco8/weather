import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-geolocation-button',
  templateUrl: './geolocation-button.component.html',
  styleUrls: ['./geolocation-button.component.sass']
})
export class GeolocationButtonComponent implements OnInit {
  active: boolean = false;
  constructor(public geolocationServices: GeolocationService) { }

  ngOnInit(): void {
    this.geolocationServices.permission$.then((status) => {
      this.active = (status == 'granted');
      if(this.active) {
        this.geolocationServices.requestGeolocation();
      }
    });
  }

}
