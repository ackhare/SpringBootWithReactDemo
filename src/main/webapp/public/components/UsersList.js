/**
 * Created by chetan on 8/5/17.
 */
import React from 'react';
import User from './User';
import Users from './Users';

export class UsersList extends React.Component {
    render() {
        if (!this.props.displayed) {
            console.log("In user list");
            var users_set = this.props.users;
            var userList = this.props.users.map(function (user) {
                return <User name={user.name} age={user.age} users_set={users_set} link={user._links.self.href}/>;
            });

            return (

                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>{userList}</tbody>
                </table>


            );
        } else {
            return null;
        }
    }

}

module.exports = UsersList;