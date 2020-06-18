import { login } from "../types";

export const loginAction = token => ({
    type: login,
    payload: token
});

const URL = `${process.env.REACT_APP_BASE_URL}auth/token/`;

export const loginFunction = credentials => dispatch => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers
    };

    fetch(URL, config)
        .then(response => response.json())
        .then(data => {
            dispatch(loginAction(data.access))
            localStorage.setItem('token', data.access)
        });
};