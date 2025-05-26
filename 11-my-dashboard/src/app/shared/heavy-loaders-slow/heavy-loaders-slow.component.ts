import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'heavy-loaders-slow',
  imports: [CommonModule],
  template: `
    <section class="h-[600px] w-full" [ngClass]="cssClass()">
      Hola Mundo
    </section>
  `,
})
export class HeavyLoadersSlowComponent {
  cssClass = input.required<string>();
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('heavy loader');
  }
}
