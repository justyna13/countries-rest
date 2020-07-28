import React, {useContext, useEffect} from "react";
import CountryContext from "../../context/country/CountryContext";
import {Link} from "react-router-dom";


const Country = ({match}) => {
    const countryContext = useContext(CountryContext);

    const {getCountry, country, loading} = countryContext;

    useEffect(() => {
        getCountry(match.params.alpha3Code);
    }, [match]);

    if (!loading && country !== null) {
        const {
            population,
            region,
            capital,
            flag,
            name,
            subregion,
            nativeName,
            topLevelDomain,
            currencies,
            languages,
            borders,
        } = country;

        return (
            <div className="container">
                <div className="back">
                    <Link to={`/`} className="btn">
                        <span className="fas fa-long-arrow-alt-left"> </span>
                    </Link>
                </div>

                <div className="country">
                    <img src={flag} alt="flag"/>

                    <div className="country__info">
                        <h2>{name}</h2>
                        <div className="country__descriptions">
                            <div className="part-1">
                                <p>
                                    <span className="country__description">Native Name:</span>{" "}
                                    {nativeName}
                                </p>
                                <p>
                                    <span className="country__description">Population:</span>{" "}
                                    {population}
                                </p>
                                <p>
                                    <span className="country__description">Region:</span> {region}
                                </p>
                                <p>
                                    <span className="country__description">Sub Region:</span>{" "}
                                    {subregion}
                                </p>
                                <p>
                                    <span className="country__description">Capital:</span>{" "}
                                    {capital}
                                </p>
                            </div>
                            <div className="part-2">
                                <p>
                                    <span className="country__description">Top Level Domain:</span>{" "}
                                    {topLevelDomain[0]}
                                </p>
                                <p>
                                    <span className="country__description">Currencies:</span>{" "}
                                    {currencies[0].name}
                                </p>
                                <p>
                                    <span className="country__description">Languages:</span>{" "}
                                    {languages
                                        .map((lang) => {
                                            return lang.name;
                                        })
                                        .join(", ")}
                                </p>
                            </div>
                        </div>

                        {borders.length !== 0 ? (
                            <div className="border-countries">
                                <p className="title">
                                    <span className="country__description">Border Countries:</span>
                                </p>

                                <div className="border-countries__links">
                                    {borders.map(border => {
                                        return (
                                            <Link
                                                to={`/country/${border.toLowerCase()}`}
                                                key={border}
                                                className="btn-country">
                                                {border}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return "";
    }
};

export default Country;
