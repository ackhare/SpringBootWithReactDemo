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
    }


    render() {
        return (

            <div class="form-group">
                <form action="/logout"  method="post">
                    <input  className="btn btn-danger" type="submit" value="Logout" />
                </form>
            </div>

        );
    }
}
module.exports = LogoutPage;
export default LogoutPage;