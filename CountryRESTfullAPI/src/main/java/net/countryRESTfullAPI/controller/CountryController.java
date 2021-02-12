package net.countryRESTfullAPI.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.countryRESTfullAPI.exception.ResourceNotFoundException;
import net.countryRESTfullAPI.model.Country;
import net.countryRESTfullAPI.repository.CountryRepository;

@RestController
@RequestMapping("/rest/v2/")
public class CountryController {

	@Autowired
	private CountryRepository countryRepository;

	// Read all countries
	@GetMapping("/countries")
	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}

	// Read country by id
	@GetMapping("/countries/{id}")
	public ResponseEntity<Country> getCountryById(@PathVariable Long id) {
		Country country = countryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Country not exist with id :" + id));
		return ResponseEntity.ok(country);
	}

	// Create
	@PostMapping("/countries")
	public Country createCountry(@RequestBody Country country) {
		return countryRepository.save(country);
	}

	// Update
	@PutMapping("/countries/{id}")
	public ResponseEntity<Country> updateCountry(@PathVariable Long id, @RequestBody Country countryDetails) {
		Country country = countryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Country not exist with id :" + id));
		country.setCountryCode(countryDetails.getCountryCode());
		country.setCountryName(countryDetails.getCountryName());

		Country updatedCountry = countryRepository.save(country);
		return ResponseEntity.ok(updatedCountry);
	}

	// Delete
	@DeleteMapping("/countries/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCountry(@PathVariable Long id) {
		Country country = countryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Country not exist with id :" + id));
		countryRepository.delete(country);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
