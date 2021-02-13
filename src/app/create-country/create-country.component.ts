import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

  country: Country = new Country();
  constructor(private countryService: CountryService, private router:Router) { }

  ngOnInit(): void {
  }

  saveCountry(){
    this.countryService.createCountry(this.country).subscribe( data => {
      console.log(data);
      this.goToCountryList();
    },
    error => console.log(error));
  }

  goToCountryList(){
    this.router.navigate(['/countries']);
  }

  onSubmit(){
    console.log(this.country);
    this.saveCountry();
  }
}
