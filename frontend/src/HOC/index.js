import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default function HOCWrapper(WrappedComponent) {

    function AuthComponent(props) {
        useEffect(() => {
            redirectUser()
        }, [props.token]);

        const redirectUser = () => {
            if ( !props.token ) {
                props.history.push('/')
            } else {
                props.history.push('/home/')
            }
        };

        return <WrappedComponent {...props}/>
    }

    function mapStateToProps(state) {
        return {
            token: state.loginLogout.token
        }
    }

    return connect(mapStateToProps)(AuthComponent)
};