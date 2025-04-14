import { Component, input } from '@angular/core';
import { Country } from '../../../../country/interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();
}
