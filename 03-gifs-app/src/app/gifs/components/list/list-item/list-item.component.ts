import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  url = input.required<string>();
}
