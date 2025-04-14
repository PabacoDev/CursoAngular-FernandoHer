import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.intefaces';
import { catchError, delay, map, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string) {
    query = query.toLocaleLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountries) => {
        console.log({ restCountries });
        return CountryMapper.mapRestCountryToCountryArray(restCountries);
      }),
      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () =>
            new Error(`No se puedieron obtner paises con ese query ${query}`)
        );
      })
    );
  }

  searchByCountry(query: string) {
    query = query.toLocaleLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArray(restCountries)
      ),
      delay(200),
      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () =>
            new Error(`No se puedieron obtner paises con ese query ${query}`)
        );
      })
    );
  }

  searchCountryByAlphaCode(code: string) {
    code = code.toLocaleLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArray(restCountries)
      ),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () => new Error(`No se puedieron obtner paises con ese query ${code}`)
        );
      })
    );
  }
}
