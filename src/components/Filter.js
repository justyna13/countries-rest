import React, {useContext, useState} from "react";
import CountryContext from "../context/country/CountryContext";


const Filter = () => {
    const countryContext = useContext(CountryContext);
    const { getCountries, filterCountries } = countryContext;
    const [region, setRegion] = useState("");

    const handleChange = (e) => {
        if (e.target.value !== "") {
            filterCountries(e.target.value);
        } else {
            getCountries();
        }

        setRegion(e.target.value);
    };

    return (
        <div className="filter">
            <select className="filter__select" name="filter__select" onChange={handleChange} value={region}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>

            <span className="filter__select__arrow"></span>
        </div>
    )
}

export default Filter;
