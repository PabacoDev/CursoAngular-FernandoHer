import {
  Component,
  effect,
  input,
  linkedSignal,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  onSearch(query: string) {
    console.log({ query });
  }
  value = output<string>();
  initialValue = input<string>('');
  placeholder = input<string>('Buscar');

  inputValue = linkedSignal<string>(() => this.initialValue());
  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 1000);
    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
