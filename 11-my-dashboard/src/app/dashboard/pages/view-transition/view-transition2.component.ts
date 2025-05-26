import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition" />
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="pixum"
        width="200"
        height="300"
        style="view-transition-name: hero2"
      />
      <div
        class="bg-blue-800 w-32 h-32 rounded bottom-16 right-10 fixed"
        style="view-transition-name: hero1"
      ></div>
    </section>
  `,
})
export default class ViewTransitionComponent {}
