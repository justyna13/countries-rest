import React, {useReducer} from "react";
import AppReducer from "./AppReducer";
import {AppActionTypes} from "../types";
import AppContext from "./AppContext";


const AppState = (props) => {
    const initState = {
        theme: "",
    };

    const [state, dispatch] = useReducer(AppReducer, initState);


    const toggleTheme = () => {
        dispatch({
            type: AppActionTypes.TOGGLE_THEME,
            payload: state.theme === "" ? "theme--dark": "",
        });
    };

    return (
        <AppContext.Provider value={{
            theme: state.theme,
            toggleTheme,
        }}>
            {props.children}

        </AppContext.Provider>
    )
}

export default AppState;
