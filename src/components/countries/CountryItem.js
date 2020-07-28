import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


const CountryItem = ({country}) => {
    const { population, region, capital, flag, name, alpha3Code} = country;

    return (
        <div className="country__item">
            <Link to={`/country/${alpha3Code.toLowerCase()}`}>
                <div className="card">
                    <img className="card-img" src={flag} alt={name} />
                        <span className="card-content">
                            <h3>{name}</h3>
                            <p>
                                <span className="country__description">Population:</span>{" "}
                                {population}
                            </p>

                            <p>
                                <span className="country__description">Region:</span>{" "}
                                {region}
                            </p>

                            <p>
                                <span className="country__description">Capital:</span>{" "}
                                {capital}
                            </p>
                        </span>
                </div>
            </Link>
        </div>
    )
}

CountryItem.propTypes = {
    country: PropTypes.object.isRequired
};

export default CountryItem;
