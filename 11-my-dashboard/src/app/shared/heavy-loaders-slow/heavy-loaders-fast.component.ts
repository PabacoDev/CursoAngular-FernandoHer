import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'fast-loaders',
  imports: [CommonModule],
  template: ` <section class="w-full" [ngClass]="cssClass()">
    <ng-content />
  </section>`,
})
export class FastLoadersComponent {
  cssClass = input.required<string>();
}
