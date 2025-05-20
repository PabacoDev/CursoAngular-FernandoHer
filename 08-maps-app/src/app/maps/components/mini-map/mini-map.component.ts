import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styles: `
  div{
    width: 100%;
    height: 260px;
  }
  `,
})
export class MiniMapComponent implements AfterViewInit {
  lngLat = input.required<LngLatLike>();
  zoom = input<number>(15);

  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);

  async ngAfterViewInit() {
    await new Promise((resolve) => setTimeout(resolve, 80));
    if (!this.divElement()) return;

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat(), // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
      interactive: false,
      pitch: 60,
    });

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    new mapboxgl.Marker({ color: color }).setLngLat(this.lngLat()).addTo(map);

    this.map.set(map);
  }
}
