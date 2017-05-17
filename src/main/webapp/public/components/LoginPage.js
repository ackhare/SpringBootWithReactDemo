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

export class LoginPage extends React.Component {
    constructor() {
        super();
        //this.state = {users: [], formDisplayed: false, mode: 'create'};


    }


    render() {
        return (
                <form action="/login" method="post">
                    <label >Username</label>:
                    <div className="form-group">
                    <input type="text" id="username" name="username"/> </div>
                    <label >Password</label>:
                    <div className="form-group">
                    <input type="password" id="password" name="password" /> </div>
                    <input type="submit"  className="btn btn-default" value="Log in" />
                </form>

        );
    }
}
module.exports = LoginPage;
export default LoginPage;