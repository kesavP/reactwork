import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Login from '../containers/LoginContainer';

getRedirectUrl = (path) => {
    console.log("path "+path);
    }

class Redirect extends Component{

    render(){
        console.log(this.props);
        console.log(this.getRedirectUrl(login));
    }
}

export default withRouter(Redirect);