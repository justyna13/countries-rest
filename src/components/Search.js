import React, {useContext, useRef} from "react";
import CountryContext from "../context/country/CountryContext";


const Search = () => {
    const countryContext = useContext(CountryContext);
    const { searchCountries, clearSearchCountries} = countryContext;

    const text = useRef("");

    const handleChange = (e) => {
        if (text.current.value !== "") {
            searchCountries(e.target.value);
        } else {
            clearSearchCountries();
        }
    };

    return (
        <div className="search">
            <span className="fas fa-search"> </span>
            <input type="text" name="search" ref={text} onChange={handleChange} placeholder="Search for a country..." />
        </div>
    )
}

export default Search;
