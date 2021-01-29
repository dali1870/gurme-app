import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = false;
       
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/authentication' }} />
        );
    }
}

export default ProtectedRoute;