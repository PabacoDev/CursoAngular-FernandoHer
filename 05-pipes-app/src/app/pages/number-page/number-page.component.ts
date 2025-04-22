import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.component.html',
})
export default class NumberPageComponent {
  totalSells = signal(2_453_463_456.4552);
  percent = signal(0.4856);
}
