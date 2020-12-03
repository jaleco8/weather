import { Component, OnInit } from '@angular/core';
import { loadingAnimation } from '../animations/loading.animation';
import { CurrentWeatherService } from '../services/current-weather.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
  animations: [loadingAnimation()]
})
export class LoadingComponent implements OnInit {

  _elements: string[] = ['#45E68A', '#41D983', '#39BF73', '#2E995C', '#1B5936'];
  public elements: string[];

  constructor(public currentWeatherService: CurrentWeatherService) { }

  ngOnInit(): void {
    this.set();
  }

  set() {
    this.elements = this._elements;
    this.scheduleNextIteration();
  }

  scheduleNextIteration() {
    setTimeout(() => {
      if (this.elements.length == 0) return this.set();
      this.clear();
    }, 100 * this._elements.length + 300)

  }

  clear() {
    this.elements = [];
    this.scheduleNextIteration();
  }

}
