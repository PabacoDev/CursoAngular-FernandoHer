import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from '../shared/pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByRegionPageComponent } from '../shared/pages/by-region-page/by-region-page.component';
import ByCountryPageComponent from '../shared/pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from '../shared/pages/country-page/country-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-country',
        component: ByCountryPageComponent,
      },
      {
        path: 'by-region',
        component: ByRegionPageComponent,
      },
      {
        path: 'by/:code',
        component: CountryPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
