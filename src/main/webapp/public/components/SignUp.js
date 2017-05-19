/**
 * Created by chetan on 19/5/17.
 */
/**
 * Created by chetan on 8/5/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';
import LoginPage from './LoginPage';

export class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {name: "", registration_sucess: false};
        this.register = this.register.bind(this);

    }

    register(e) {
        e.preventDefault();
        var self = this;

        var user = {
            username: $('#username').val(),
            password: $('#password').val(),
            passwordConfirm: $('#confirmPassword').val(),
            email: $('#email').val(),
            firstName: $('#fname').val(),
            lastName: $('#lname').val()
        };
        $.ajax({
            url: "http://localhost:8080/api/register",
            type: "POST",
            data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                console.log();
                self.setState({registration_sucess: true, name: data.obj1.name});

                console.log("good on save");
            },
            error: function () {
                self.setState({registration_sucess: true, name: ""});
                console.log("error on save");

            }

        });

    }

    render() {
        if (this.state.registration_sucess) {
return (
            <LoginPage registration_message={this.state.name+" has been successfully registred"}/>
)
        }
        else {
            return (
                <div className="center_div">
                    {/*<div className="label label-danger">{this.state.signUpError}</div>*/}
                    <div className="form-group">
                        <label >Username</label>:
                        <div className="form-group">
                            <input type="text" id="username" className="form-control" name="username"/></div>
                        <label >Password</label>:
                        <div className="form-group">
                            <input type="password" id="password" className="form-control" name="password"/></div>
                        <label >Password Confirm</label>:
                        <div className="form-group">
                            <input type="password" id="confirmPassword" className="form-control"
                                   name="confirmPassword"/></div>
                        <label >Email</label>:
                        <div className="form-group">
                            <input id="email" className="form-control" name="email"/></div>
                        <label >First Name</label>:
                        <div className="form-group">
                            <input id="fname" className="form-control" name="firstName"/></div>
                        <label >Last Name</label>:
                        <div className="form-group">
                            <input id="lname" className="form-control" name="lastName"/></div>
                        <button onClick={this.register} className="btn btn-success">Sign up</button>
                    </div>
                </div>
            );
        }
    }
}
module.exports = SignUp;
export default SignUp;