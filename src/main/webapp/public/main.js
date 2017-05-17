'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
class App extends React.Component {
    constructor() {
        super();

        // this.editUser = this.editUser.bind(this);
    }


    componentDidMount() {
        var ref;
        console.log("Inside component did mount of users ");
        var self = this;
        var mode;

    }

    render() {

        return (
            // <li className="list-group-item">
            // <div>

            <LoginPage />
            // </div>
        );

    }
}
ReactDOM.render(
    <App />, document.getElementById('app')
);
