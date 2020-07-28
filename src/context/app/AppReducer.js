import {AppActionTypes} from "../types";


export default (state, action) => {
    switch (action.type) {
        case AppActionTypes.TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};
