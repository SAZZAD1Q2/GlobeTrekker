import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCountries } from '../redux/countries/countriesSlice';

function Country({ country }) {
  const { name, region, flags } = country;
  return (
    <>
      <div className="card">
        <NavLink to={`/details/${name}`} className="navLink" data-testid="navLink">
          <div className="image">
            <img src={flags} alt="country" />
          </div>
          <h1 className="country-heading-one">{name}</h1>
          <h4 className="country-heading-two">
            Region:
            {' '}
            {region}
          </h4>
        </NavLink>
      </div>
    </>
  );
}

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flags: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  }).isRequired,
};

function Countries() {
  const { countries, isLoading, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchCountry = countries.filter(
    (country) => country.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading === true) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="main-container">
        <div className="world-map">
          <div className="search-background">
            <input
              type="text"
              value={search}
              placeholder="Search Here..."
              onChange={handleSearch}
              className="search"
            />
            <h1 className="search-heading">World Countries</h1>
          </div>
        </div>
        <div className="countries-container">
          {searchCountry.map((country) => (
            <Country key={country.id} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Countries;
