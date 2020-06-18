import {logout} from "../types";

const logoutAction = () => ({
        type: logout
    });

export const logoutFunction = () => dispatch => {
    localStorage.clear();
    dispatch(logoutAction())
};