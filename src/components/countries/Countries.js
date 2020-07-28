import React, {useContext, useEffect} from "react";
import CountryContext from "../../context/country/CountryContext";
import CountryItem from "./CountryItem";


const Countries = () => {
    const countryContext = useContext(CountryContext);

    const { countries, loading, search, getCountries } = countryContext;

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <div className="country__list">
            {countries !== null && !loading ?
                search !== null ?
                    search.map(country => (
                        <CountryItem key={country.numericCode} country={country} />
                    ))
                    : countries.map(country => (
                        <CountryItem key={country.numericCode} country={country} />
                    ))
                : ""}
        </div>
    )
}

export default Countries;
