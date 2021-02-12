package net.countryRESTfullAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.countryRESTfullAPI.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {

}
