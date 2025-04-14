import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.intefaces';
export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capital.join(', '),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      population: restCountry.population,
      continents: restCountry.continents.join(', '),
      area: restCountry.area,
      region: restCountry.region,
      status: restCountry.status,
      subRegion: restCountry.subregion,
      timeZones: restCountry.timezones.join(', '),
      languages: restCountry.languages
        ? Object.values(restCountry.languages).join(', ')
        : '',
    };
  }

  static mapRestCountryToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
