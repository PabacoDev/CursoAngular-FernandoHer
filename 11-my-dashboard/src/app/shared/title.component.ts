import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '<h1 class="text-3xl mb-5">{{title()}}</h1>',
})
export class TitleComponent {
  title = input.required<string>();
  withShadow = input<boolean>(false);
}
