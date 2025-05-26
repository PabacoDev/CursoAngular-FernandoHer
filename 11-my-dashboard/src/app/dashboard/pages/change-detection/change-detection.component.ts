import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  imports: [TitleComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
})
export default class ChangeDetectionComponent {
  frameworkAsSignal = signal({
    name: 'Angular',
    releaseYear: '2025',
  });
  frameworkAsProperty = {
    name: 'Angular',
    releaseYear: '2025',
  };

  currentFrameWork = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );
  constructor() {
    setTimeout(() => {
      this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({ ...value, name: 'React' }));
      console.log('Hecho');
    }, 3000);
  }
}
