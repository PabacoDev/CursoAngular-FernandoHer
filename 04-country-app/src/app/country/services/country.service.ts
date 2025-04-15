import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.intefaces';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheAlphaCode = new Map<string, Country | undefined>();
  private queryCacheRegion = new Map<Region, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();
    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountries) => {
        return CountryMapper.mapRestCountryToCountryArray(restCountries);
      }),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
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
    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArray(restCountries)
      ),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
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
    if (this.queryCacheAlphaCode.has(code)) {
      return of(this.queryCacheAlphaCode.get(code) ?? []);
    }
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArray(restCountries)
      ),
      map((countries) => countries.at(0)),
      tap((country) => this.queryCacheAlphaCode.set(code, country)),
      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () => new Error(`No se puedieron obtner paises con ese query ${code}`)
        );
      })
    );
  }

  searchCountryByRegion(region: Region) {
    if (this.queryCacheRegion.has(region)) {
      return of(this.queryCacheRegion.get(region) ?? []);
    }
    return this.http.get<RESTCountry[]>(`${API_URL}/region/${region}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryToCountryArray(restCountries)
      ),
      tap((countries) => this.queryCacheRegion.set(region, countries)),
      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () =>
            new Error(`No se puedieron obtner paises con ese query ${region}`)
        );
      })
    );
  }
}
