import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public initialValue: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;


  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {

    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;

  }

  searchByPais(term: string): void {

    this.isLoading= true;

    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries =  countries;
        this.isLoading= false
      });
    console.log(term);
  }

}
