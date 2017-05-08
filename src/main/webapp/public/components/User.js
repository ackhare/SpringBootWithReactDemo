

import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './UserForm'
import Users from './Users';
export class User extends React.Component {
    constructor() {
        super();
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }


    deleteUser() {
        var self = this;
        console.log('delete');
        $.ajax({
            url: self.props.link,
            type: 'DELETE',
            success: function (result) {
                // This sets a display state which determines whether to render or not.
                //     If the employee is deleted successfully, this variable is set to true.
                // The handleDelete method sends a delete request to the server (using the href
                // you got back from the get request). If successful, display
                // is set to false and the render is updated. Otherwise,
                // Toastr notifies the user that an error occurred.
              return(ReactDOM.render(
                    <Users fromAjax={true}/>, document.getElementById('app'))
                );
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //<!--For that you can use Toastr which will allow you to show popups-->
                toastr.error(xhr.responseJSON.message);
            }
        });


    }

    editUser() {
        var obj = this.props.users_set;

        return(ReactDOM.render(
            <UserForm displayed={true} mode_current={'edit'} users_set={obj} links={this.props.link}
                      user_to_edit={this.props}/>, document.getElementById('app')
        ));

    }

    render() {
        return (
            // <li className="list-group-item">

            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>

                <td>
                    <button className="btn btn-primary" onClick={this.deleteUser}>Delete</button>
                </td>
                <td>
                    <button name="Edit"
                            className="btn btn-primary"
                            onClick={this.editUser}>Edit
                    </button>
                </td>
            </tr>
            // </li>
        );
    }
}

module.exports = User;