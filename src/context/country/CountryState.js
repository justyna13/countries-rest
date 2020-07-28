import React, {useReducer} from "react";
import CountryReducer from "./CountryReducer";
import axios from 'axios';
import {CountriesActionTypes} from "../types";
import CountryContext from "./CountryContext";


const CountryState = (props) => {

    const initState = {
        countries: null,
        search: null,
        country: null,
        loading: false,
        error: null
    };

    const [state, dispatch] = useReducer(CountryReducer, initState);

    // get countries

    const getCountries = async () => {
        try {
            setLoading();

            const res = await axios.get("https://restcountries.eu/rest/v2/all");

            let data = [];

            data = res.data.map(country => {
                for (let key in country) {
                    if (key !== "population" && key !== "region" &&
                        key !== "capital" && key !== "flag" &&
                        key !== "name" && key !== "numericCode" &&
                        key !== "alpha3Code") {
                        delete country[key];
                    }
                }

                return country;
            });

            dispatch({
                type: CountriesActionTypes.GET_COUNTRIES,
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.COUNTRY_ERROR,
                payload: e
            });
        }
    };


    // filter countries

    const filterCountries = async (region) => {
        try {
            setLoading();

            const res = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);

            let data = [];

            data = res.data.map((country) => {
                for (let key in country) {
                    if (
                        key !== "population" &&
                        key !== "region" &&
                        key !== "capital" &&
                        key !== "flag" &&
                        key !== "name" &&
                        key !== "numericCode" &&
                        key !== "alpha3Code"
                    ) {
                        delete country[key];
                    }
                }

                return country;
            });

            dispatch({
                type: CountriesActionTypes.FILTER_COUNTRIES,
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.COUNTRY_ERROR,
                payload: e
            })
        }
    };


    // search countries

    const searchCountries = (text) => {
        dispatch({
            type: CountriesActionTypes.SEARCH_COUNTRIES,
            payload: text
        });
    }

    // clear search countries

    const clearSearchCountries = () => {
        dispatch({
            type: CountriesActionTypes.CLEAR_SEARCH_COUNTRIES
        });
    }


    // get country

    const getCountry = async (alpha3Code) => {
        try {
            setLoading();

            const res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);

            dispatch({
                type: CountriesActionTypes.GET_COUNTRY,
                payload: res.data,
            })
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.COUNTRY_ERROR,
                payload: e
            })
        }
    };

    // set Loading

    const setLoading = () => {
        dispatch({
            type: CountriesActionTypes.SET_LOADING
        })
    };

    return (
        <CountryContext.Provider
            value={{
                countries: state.countries,
                search: state.search,
                country: state.country,
                loading: state.loading,
                getCountries,
                filterCountries,
                searchCountries,
                clearSearchCountries,
                getCountry
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}


export default CountryState;
