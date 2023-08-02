import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CountryDetails() {
  const { name } = useParams();
  const { countries } = useSelector((state) => state.country);
  const countryData = countries.find((country) => country.name === name);
  const navigation = useNavigate();

  if (!countryData) {
    return (
      <div>
        <h1>No Country Abailable</h1>
        <button type="submit" onClick={() => navigation('/')} className="back-btn">Go Back</button>
      </div>
    );
  }

  const {
    flags, name: countryName, region, population, area,
  } = countryData;

  return (
    <div>
      <div className="world-map">
        <div className="search-background">
          <button type="submit" onClick={() => navigation('/')} className="back-btn">Back</button>
          <h1 className="search-heading">World Countries</h1>
        </div>
      </div>
      <div className="container">
        <img src={flags} alt="country" />
        <h1 className="country-heading-one">
          Country Name:
          {' '}
          {countryName}
        </h1>
        <h4 className="country-heading-two">
          Region:
          {' '}
          {region}
        </h4>
        <h4 className="country-heading-two">
          Population:
          {' '}
          {population}
        </h4>
        <h4 className="country-heading-two">
          Area:
          {' '}
          {area}
        </h4>
      </div>
    </div>
  );
}

export default CountryDetails;
