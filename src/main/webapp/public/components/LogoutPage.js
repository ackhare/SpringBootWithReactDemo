/**
 * Created by chetan on 17/5/17.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList'
import ShowAddButton from './ShowAddButton'
import UserForm from './UserForm'

export class LogoutPage extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }
    logout() {
        var data = 'username=' + 'user' + '&password=' + 'password';
        $.ajax({
            url: "http://localhost:8080/logout",
            type: "POST",
            data: "",
            success: function (data,textStatus,jqXHR ) {
                //self.setState({isLogin:true});

                console.log("success on logout");

            },
            error: function () {
               // self.setState({loginError:"some issue occurred"});

                console.log("error on logout");

            }
        })

    }

    render() {
        return (

            <div className="form-group">
                <form >
                    <button  className="btn btn-danger" onClick={this.logout} value="Logout" >LogOut</button>
                </form>
            </div>

        );
    }
}
module.exports = LogoutPage;
export default LogoutPage;