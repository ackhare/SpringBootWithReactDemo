import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList'
import ShowAddButton from './ShowAddButton'
import UserForm from './UserForm'
import LogoutPage from './LogoutPage'
import Users from './Users'
import Header from './Header'
import SignUp from './SignUp'
import {Form} from 'formsy-react';
import MyInput from './Input'
export class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogin: "",
            loginError: "",
            username: "",
            authenticatedUser: "",
            authorities: "",
            registrationMessage: "",
            canSubmit: false,
            validationErrors: {}
        };
        this.login = this.login.bind(this);
        this.signUpPage = this.signUpPage.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    validateForm(values) {
        if (!values.username) {
            this.setState({
                validationErrors: {
                    username: 'Has no value'
                }
            });
        } else {
            this.setState({
                validationErrors: {}
            });
        }
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

    componentDidMount() {
        var ref;
        console.log("Inside component did mount of users ");
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/isLogin",
        }).then(function (data) {
            console.log('login successfully');
            self.setState({
                isLogin: true,
                authenticatedUser: data.username,
                authorities: data.authorities[0].authority
            });

        });

    }

    signUpPage() {
        ReactDOM.render(<SignUp/>, document.getElementById('app'))
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
                    <Header username={this.state.authenticatedUser}/>
                    <Users/>
                </div>

            );
        }

        else {
            return (

                //     <div className="center_div">
                // {this.props.registration_message}
                //         <div className="label label-danger">{this.state.loginError}</div>
                //         <div className="form-group">
                <Form onSubmit={this.login} onChange={this.validateForm} onValid={this.enableButton}
                      onInvalid={this.disableButton} validationErrors={this.state.validationErrors} className="login">


                    <MyInput value="" type="text" required name="username"/>


                    <MyInput value="" type="password" required name="password"/>
                    <button type="submit" disabled={!this.state.canSubmit} className="btn btn-success">Log in</button>
                    {/*<button className="btn btn-green" onClick={this.signUpPage}>SignUp</button>*/}

                </Form>

            );
        }
    }
}
module.exports = LoginPage;
export default LoginPage;