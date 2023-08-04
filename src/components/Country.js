import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Country({ country }) {
  const { name, region, flags } = country;
  return (
    <>
      <div className="card">
        <NavLink to={`/details/${name}`} className="navLink" data-testid="navLink">
          <div className="image">
            <img src={flags} alt="country" />
          </div>
          <h1 className="countryHeadLineOne">{name}</h1>
          <h4 className="countryHeadlineTwo">
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

export default Country;
