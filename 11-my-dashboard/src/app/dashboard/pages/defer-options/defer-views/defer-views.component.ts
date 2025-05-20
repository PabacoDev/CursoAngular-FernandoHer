import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-views',
  imports: [],
  templateUrl: './defer-views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferViewsComponent { }
