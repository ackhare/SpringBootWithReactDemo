/**
 * Created by chetan on 16/5/17.
 */
/**
 * Created by chetan on 8/5/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList'
import ShowAddButton from './ShowAddButton'
import UserForm from './UserForm'
import LogoutPage from './LogoutPage'
import Users from './Users'
export class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {isLogin: "", loginError: "", username: "", authenticatedUser: "", authorities: ""};
        this.login = this.login.bind(this);

    }

    login() {
        var data = 'username=' + $('#username').val() + '&password=' + $('#password').val();
        var self = this;
        $.ajax({
            url: "http://localhost:8080/login",
            type: "POST",
            data: data,
            success: function (data, textStatus, jqXHR) {

                $.ajax({
                    url: "http://localhost:8080/api/isLogin",
                }).then(function (data) {

                    self.setState({
                        isLogin: true,
                        authenticatedUser: data.username,
                        authorities: data.authorities[0].authority
                    });

                });
                console.log("success on newUsers");

            },
            error: function () {
                self.setState({loginError: "username or password is wrong"});

                console.log("error on newUsers");

            }
        })

    }

    render() {
        if (this.state.isLogin) {
            return (
                <div>
                    <div className="col-md-12">
                        <div className="col-md-6">


                        </div>
                        <div className="col-md-6  col-md-offset-10">
                            <p className="label label-info">Welcome {this.state.authenticatedUser} with
                                role {this.state.authorities}</p>
                            <LogoutPage />
                        </div>

                    </div>
                    <Users/>
                </div>
            );
        }

        else {
            return (

                <div>
                    <div className="label label-danger">{this.state.loginError}</div>
                    <div className="form-group">
                        <label >Username</label>:
                        <div className="form-group">
                            <input type="text" id="username" name="username"/></div>
                        <label >Password</label>:
                        <div className="form-group">
                            <input type="password" id="password" name="password"/></div>
                        <button onClick={this.login} className="btn btn-success">Log in</button>
                    </div>
                </div>

            );
        }
    }
}
module.exports = LoginPage;
export default LoginPage;