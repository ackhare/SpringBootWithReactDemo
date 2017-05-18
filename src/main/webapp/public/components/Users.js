/**
 * Created by chetan on 8/5/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList'
import ShowAddButton from './ShowAddButton'
import UserForm from './UserForm'
import Header from './Header'


export class Users extends React.Component {
    constructor() {
        super();
        this.state = {users: [], formDisplayed: false, mode: 'create'};
        this.onNewUser = this.onNewUser.bind(this);
        this.onToggleForm = this.onToggleForm.bind(this);

    }

    componentWillReceiveProps() {
        console.log("run be");
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/employees",
        }).then(function (data) {
            self.setState({users: data._embedded.employees});
        });
    }

    componentDidMount() {
        var ref;
        console.log("Inside component did mount of users ");
        var self = this;
        var mode;
        $.ajax({
            url: "http://localhost:8080/api/employees",
        }).then(function (data) {
            console.log("success in editing  in component did mount of users");
            self.setState({users: data._embedded.employees});

        });
    }


    onToggleForm() {
        console.log('toggled');
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    }


    onNewUser(newUser, ref_form) {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/employees",
            type: "POST",
            data: JSON.stringify({name: newUser.name, age: newUser.age}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                console.log("success on newUsers");
                $.ajax({
                    url: "http://localhost:8080/api/employees",
                }).then(function (data) {
                    console.log(data)
                    self.setState({formDisplayed: false})
                    self.setState({users: data._embedded.employees});
                    console.log("Inside onNewUser");
                    ReactDOM.findDOMNode(ref_form).reset();
                });
            }
        })


    }

    onRemoveUser(user) {

    }

    render() {
        return (
            <div>

                <UserForm displayed={this.state.formDisplayed} mode_current={'create'} onNewUser={this.onNewUser}/>
                <UsersList displayed={this.state.formDisplayed} users={this.state.users}/>
                <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>

            </div>
        );
    }
}
module.exports = Users;
export default Users;