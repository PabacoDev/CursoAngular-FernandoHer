import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title.component';

type Grade = 'A' | 'B' | 'C' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  showContent = signal<boolean>(true);
  grade = signal<Grade>('A');
  frameworks = signal(['Angular', 'Vue', 'Svelte', 'Laravel', 'Qwik', 'React']);
  frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
