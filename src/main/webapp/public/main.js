
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
class App extends React.Component {
    constructor() {
        super();
        this.state = {authenticatedUser: "",authorities:""};
        // this.editUser = this.editUser.bind(this);
    }


    componentDidMount() {
        var ref;
        console.log("Inside component did mount of users ");
        var self = this;
        var mode;
        $.ajax({
            url: "http://localhost:8080/api/isLogin",
        }).then(function (data) {
            console.log("success in editing  in component did mount of users");
            console.log(data.authorities[0].authority);
            self.setState({authenticatedUser: data.username,authorities:data.authorities[0].authority});

        });
    }

    render() {
        console.log("authenticatedUser");
        if (this.state.authenticatedUser) {
            return (
                <div>
                    <div className="col-md-12">
                        <div className="col-md-6">

                        <p className="label label-info">The user login is {this.state.authenticatedUser} with role {this.state.authorities}</p>
</div>
                        <div className="col-md-6">

                            <LogoutPage />
                        </div>

</div>
                      <Users/>
                </div>
            );
        }
        else {
            return (
                // <li className="list-group-item">
                // <div>

                    <LoginPage />
                // </div>
            );
        }
    }
}
ReactDOM.render(
    <App />, document.getElementById('app')
);
