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
        this.state = {users: [], formDisplayed: false, mode: 'create'};


    }


    render() {
        return (
            <div>
   <form name='f' action='/login' method='POST'>
    User:<input type='text' name='username' /><br/>
       Password:<input type='password' name='password'/>
   <input name="submit" type="submit" value="Login"/>

</form>
            </div>
        );
    }
}
module.exports = LoginPage;
export default LoginPage;