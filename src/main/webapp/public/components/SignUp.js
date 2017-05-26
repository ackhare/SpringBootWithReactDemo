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
import {Form} from 'formsy-react';
import MyInput from './Input'

export class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {name: "", registration_sucess: false, display: true, canSubmit: false, validationErrors: {},serverSideError:""};
        this.register = this.register.bind(this);
        this.cancel = this.cancel.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillReceiveProps() {
        console.log("run be");
        this.setState({display: true, registration_sucess: false})
    }

    cancel() {
        this.setState({display: false, registration_sucess: false})
    }


    enableButton(values) {


        this.setState({
            canSubmit: true,
            validationErrors: {}
        });

    }

    disableButton() {
        this.setState({
            canSubmit: false
        });
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
                console.log('succ');
                console.log(data);
                if(data.obj1.name) {
                    self.setState({registration_sucess: true, name: data.obj1.name});
                }
                else if(data.obj1.error){
                    self.setState({registration_sucess: false, serverSideError: data.obj1.error,display:false});
                    $('html, body').animate({scrollTop: '0px'}, 300);
                }
                console.log("good on save");
            },
            error: function (xhr, error) {

                self.setState({registration_sucess: true, name: ""});
                console.log("error on save");
                console.log(xhr);
                console.log(error);
            }

        });

    }

    render() {
        console.log(this.state);
        if (this.state.registration_sucess) {
            return (
                <LoginPage registration_message={this.state.name + " has been successfully registred"}/>
            )
        }
        else if (!this.state.display && !this.state.serverSideError) {
            return (
                <LoginPage />
            )

        }


        else {
            return (
                <div className="center_div">
                    <h3 className="custom-title">Register to FinNews</h3>
                    <div className="label label-danger custom-error">{this.state.serverSideError}</div>
                    <Form onValid={this.enableButton}
                          onInvalid={this.disableButton} validationErrors={this.state.validationErrors}
                    >
                        <MyInput value="" type="text" errorMessage="Username is required" required title="Username"
                                 id="username" name="username"/>

                        <MyInput value="" type="password"
                                 title="Password"
                                 required
                                 validations={{
                                     matchRegexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                                 }}
                                 errorMessage="Password must be Minimum 8 characters with at least 1 Alphabet and 1 Number: "
                                 id="password" name="password"/>

                        <MyInput value="" type="password" title="Confirm Password"
                                 required
                                 id="confirmPassword"
                                 errorMessage="confirm password should match with password"
                                 validations="equalsField:password"
                                 name="confirmPassword"/>

                        <MyInput value="" type="text" validations="isEmail" errorMessage="This is not a valid email"
                                 required title="Email" id="email"
                                 name="email"/>

                        <MyInput value="" type="text" required title="First Name" errorMessage="FirstName is required"
                                 id="fname"
                                 name="confirmPassword"/>

                        <MyInput value="" type="text" required title="Last Name" id="lname"
                                 errorMessage="LastName is required" name="lastName"/>
                        <button type="submit" disabled={!this.state.canSubmit} onClick={this.register}
                                className="btn btn-success">Sign up
                        </button>
                        <button type="submit" onClick={this.cancel}
                                className="btn btn-danger col-md-offset-8-custom-register-button">Cancel
                        </button>

                    </Form></div>
            );
        }
    }
}
module.exports = SignUp;
export default SignUp;