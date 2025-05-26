import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title.component';
import { FastLoadersComponent } from '../../../shared/heavy-loaders-slow/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options',
  imports: [TitleComponent, FastLoadersComponent],
  templateUrl: './defer-options.component.html',
})
export default class DeferOptionsComponent {}
