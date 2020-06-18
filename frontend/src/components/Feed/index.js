import React from 'react';
import { connect } from 'react-redux';
import Map from "../Map"

const Logout = (props) => {

    return <>
        <Map style={"mapbox://styles/ck8piu5kj0v251iogp5x44jkh"}/>
        <Map history={props.history} style={"mapbox://styles/ck8piu5kj0v251iogp5x44jkh"}/>
        <Map history={props.history} style={"mapbox://styles/ck8piu5kj0v251iogp5x44jkh"}/>
        </>
}

export default connect()(Logout);