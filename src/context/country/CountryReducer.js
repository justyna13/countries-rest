import {CountriesActionTypes} from "../types";


export default (state, action) => {
    switch (action.type) {
        case CountriesActionTypes.GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false,
            };
        case CountriesActionTypes.FILTER_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case CountriesActionTypes.SEARCH_COUNTRIES:
            return {
                ...state,
                search: state.countries.filter( country => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return country.name.match(regex);
                }),
            };
        case CountriesActionTypes.CLEAR_SEARCH_COUNTRIES:
            return {
                ...state,
                search: null
            };
        case CountriesActionTypes.GET_COUNTRY:
            return {
                ...state,
                country: action.payload,
                loading: false,
            };
        case CountriesActionTypes.COUNTRY_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case CountriesActionTypes.SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
