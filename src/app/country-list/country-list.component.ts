import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../country'
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCountries();
    // this.countries = [{
    //       "id": 1,
    //       "countryName": "Sri Lanka",
    //       "countryCode": "SL005"
    //   },
    //   {
    //       "id": 4,
    //       "countryName": "India",
    //       "countryCode": "A785"
    //   },
    //   {
    //       "id": 5,
    //       "countryName": "China",
    //       "countryCode": "C456"
    //   }];
  }

    private getCountries(){
        this.countryService.getCountriesList().subscribe(data => {
          this.countries = data;
        });
    }

    updateCountry(id: number){
      this.router.navigate(['update-country', id]);
    }

    deleteCountry(id: number){
      this.countryService.deleteCountry(id).subscribe(data => {
        console.log(data);
        this.getCountries();
      },
      error => console.log(error));
    }

    countryDetails(id: number){
      this.router.navigate(['country-details', id]);
    }
}
