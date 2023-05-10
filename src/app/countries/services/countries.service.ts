import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country, Name } from '../interface/country';

@Injectable({providedIn: 'root'})
export class CountriesService {


  private apiUrl: string ="https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }


  seacrhCountryByAlphaCode ( code: string ):Observable<Country | null>{

    const Url = `${ this.apiUrl }/alpha/${ code }`;

    return  this.http.get<Country[]>( Url )
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError(() =>  of(null) )
    );

  }

  searchCapital (term: string): Observable<Country[]> {

    const Url = `${ this.apiUrl }/capital/${ term }`;

  return  this.http.get<Country[]>( Url )
    .pipe(
      catchError(() =>  of([]) )
      // catchError(error => {
      //   console.log(error);
      //   return of([])
      );
    // .pipe(   // usando tap y map
    //   tap(countries => console.log('tap 1', countries)),
    //   map(countries => [] ),
    //   tap(countries => console.log('tap 2', countries))
    //   );
  }
  // searchRegion (term: string): Observable<Region[]> {

  // return  this.http.get<Country[]>(`${ this.apiUrl }/capital/${ term }`);
  // }

  searchCountry (term: string): Observable<Country[]> {

    const Url = `${ this.apiUrl }/name/${ term }`;

    return  this.http.get<Country[]>( Url ).pipe(
      catchError(() =>  of([]) )
    );
  }
  searchRegion (region: string): Observable<Country[]> {
    const Url = `${ this.apiUrl }/region/${ region }`;

    return  this.http.get<Country[]>( Url ).pipe(
      catchError(() =>  of([]) )
    );
  }
}
