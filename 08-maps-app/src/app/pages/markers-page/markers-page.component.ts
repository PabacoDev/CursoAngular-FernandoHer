import {
  Component,
  ElementRef,
  signal,
  viewChild,
  AfterViewInit,
} from '@angular/core';
import mapboxgl, { LngLatLike, Map, MapMouseEvent } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';
import { v4 } from 'uuid';
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.component.html',
})
export class MarkersPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map | null>(null);
  markers = signal<Marker[]>([]);

  async ngAfterViewInit() {
    await new Promise((resolve) => setTimeout(resolve, 80));
    if (!this.divElement()) return;

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-6.056688688952651, 37.54313759914225], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    // const marker = new mapboxgl.Marker({ draggable: true })
    //   .setLngLat([-6.056688688952651, 37.54313759914225])
    //   .addTo(map);

    this.mapListeners(map);
  }
  mapListeners(map: Map) {
    map.on('click', (event) => this.mapClick(event));

    this.map.set(map);
  }

  mapClick(event: MapMouseEvent) {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    if (!this.map()) return;
    const marker = new mapboxgl.Marker({ color: color })
      .setLngLat(event.lngLat)
      .addTo(this.map()!);

    const newMarker: Marker = {
      id: v4(),
      mapboxMarker: marker,
    };
    this.markers.update((markers) => [newMarker, ...markers]);
  }

  flyToMarker(lngLat: LngLatLike) {
    if (!this.map()) return;
    this.map()?.flyTo({
      center: lngLat,
    });
  }

  deleteMarker(marker: Marker) {
    if (!this.map()) return;
    const map = this.map();
    marker.mapboxMarker.remove();

    this.markers.set(this.markers().filter((m) => m.id != marker.id));
  }
}
