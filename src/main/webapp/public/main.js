'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
class Users extends React.Component {
    // constructor() {
    //     super();
    //     // this.state = {users: [], formDisplayed: false, mode: 'create'};
    //     // this.onNewUser = this.onNewUser.bind(this);
    //     // this.onToggleForm = this.onToggleForm.bind(this);
    //
    // }
    //
    // componentWillReceiveProps() {
    //     console.log("run be");
    //     var self = this;
    //     $.ajax({
    //         url: "http://localhost:8080/api/employees",
    //     }).then(function (data) {
    //         self.setState({users: data._embedded.employees});
    //     });
    // }
    //
    // componentDidMount() {
    //     var ref;
    //     console.log("Inside component did mount of users ");
    //     var self = this;
    //     var mode;
    //     $.ajax({
    //         url: "http://localhost:8080/api/employees",
    //     }).then(function (data) {
    //         console.log("success in editing  in component did mount of users");
    //         self.setState({users: data._embedded.employees});
    //
    //     });
    // }
    //
    //
    // onToggleForm() {
    //     console.log('toggled');
    //     this.setState({
    //         formDisplayed: !this.state.formDisplayed
    //     });
    // }
    //
    //
    // onNewUser(newUser, ref_form) {
    //     var self = this;
    //     $.ajax({
    //         url: "http://localhost:8080/api/employees",
    //         type: "POST",
    //         data: JSON.stringify({name: newUser.name, age: newUser.age}),
    //         contentType: "application/json; charset=utf-8",
    //         dataType: "json",
    //         success: function () {
    //             console.log("success on newUsers");
    //             $.ajax({
    //                 url: "http://localhost:8080/api/employees",
    //             }).then(function (data) {
    //                 console.log(data)
    //                 self.setState({formDisplayed: false})
    //                 self.setState({users: data._embedded.employees});
    //                 console.log("Inside onNewUser");
    //                 ReactDOM.findDOMNode(ref_form).reset();
    //             });
    //         }
    //     })
    //
    //
    // }

    onRemoveUser(user) {

    }

    render() {
        return (
            <div>
            hello
            </div>
        );
    }
}


// class User extends React.Component {
//     constructor() {
//         super();
//         this.deleteUser = this.deleteUser.bind(this);
//         this.editUser = this.editUser.bind(this);
//     }
//
//
//     deleteUser() {
//         var self = this;
//         $.ajax({
//             url: self.props.link,
//             type: 'DELETE',
//             success: function (result) {
//                 // This sets a display state which determines whether to render or not.
//                 //     If the employee is deleted successfully, this variable is set to true.
//                 // The handleDelete method sends a delete request to the server (using the href
//                 // you got back from the get request). If successful, display
//                 // is set to false and the render is updated. Otherwise,
//                 // Toastr notifies the user that an error occurred.
//                 ReactDOM.render(
//                     <Users fromAjax={true}/>, document.getElementById('app')
//                 );
//             },
//             error: function (xhr, ajaxOptions, thrownError) {
//                 //<!--For that you can use Toastr which will allow you to show popups-->
//                 toastr.error(xhr.responseJSON.message);
//             }
//         });
//
//
//     }
//
//     editUser() {
//         var obj = this.props.users_set;
//
//         ReactDOM.render(
//             <UserForm displayed={true} mode_current={'edit'} users_set={obj} links={this.props.link}
//                       user_to_edit={this.props}/>, document.getElementById('app')
//         );
//
//     }
//
//     render() {
//         return (
//             // <li className="list-group-item">
//
//             <tr>
//                 <td>{this.props.name}</td>
//                 <td>{this.props.age}</td>
//
//                 <td>
//                     <button className="btn btn-primary" onClick={this.deleteUser}>Delete</button>
//                 </td>
//                 <td>
//                     <button name="Edit"
//                             className="btn btn-primary"
//                             onClick={this.editUser}>Edit
//                     </button>
//                 </td>
//             </tr>
//             // </li>
//         );
//     }
// }
// class ShowAddButton extends React.Component {
//     render() {
//
//         var classString, buttonText, button;
//
//         if (this.props.displayed) {
//             classString = 'btn btn-info ';
//             button = 'Cancel';
//         } else {
//             classString = 'btn btn-success ';
//             button = 'Create New User';
//         }
//         return (
//             <div className="form-group">
//                 <button className={classString} onClick={this.props.onToggleForm}>{button}</button>
//             </div>
//         );
//     }
// }
//
// class UserForm extends React.Component {
//     constructor() {
//         super();
//         //this.state = {users: [], formDisplayed: false, mode: 'create'};
//         this.handleForm = this.handleForm.bind(this);
//
//     }
//
//     handleForm(e) {
//         e.preventDefault();
//         if (this.props.mode_current == 'create') {
//             var newUser = {
//                 name: ReactDOM.findDOMNode(this.refs.name).value,
//                 age: ReactDOM.findDOMNode(this.refs.age).value
//             };
//
//             //this.refs.userForm.getDOMNode().reset();
//
//             this.props.onNewUser(newUser, this.refs.userForm);
//         }
//         else if (this.props.mode_current == 'edit') {
//             var existingUser = {
//                 name: ReactDOM.findDOMNode(this.refs.name).value,
//                 age: ReactDOM.findDOMNode(this.refs.age).value,
//                 key: ReactDOM.findDOMNode(this.refs.key).value,
//             };
//             console.log("Inside editing");
//             $.ajax({
//                 url: this.props.links,
//                 type: "PUT",
//                 data: JSON.stringify({name: existingUser.name, age: existingUser.age}),
//                 contentType: "application/json; charset=utf-8",
//                 dataType: "json",
//                 success: function () {
//                     console.log("success in editing");
//
//                     ReactDOM.render(
//                         <Users fromAjax={true}/>, document.getElementById('app')
//                     );
//                 }
//             })
//
//             console.log('editing complete');
//
//
//         }
//     }
//
//     render() {
//         var mode_current;
//         var display = this.props.displayed ? 'block' : 'none';
//
//         var styles = {
//             display: display
//         };
//
//         if (this.props.mode_current == 'create') {
//             mode_current = "Create"
//         }
//         else {
//             mode_current = "Edit"
//         }
//         var current_mode = {
//
//             mode_current: mode_current
//         };
//         var name_to_edit = null
//         var age_to_edit = null
//         if (this.props.user_to_edit) {
//
//             name_to_edit = this.props.user_to_edit.name
//             age_to_edit = this.props.user_to_edit.age
//         }
//         return (
//
//             <form style={styles} ref="userForm" id="userForm" onSubmit={this.handleForm}>
//                 <div className="form-group">
//                     <input type="text" ref="name" id="name" defaultValue={name_to_edit} className="form-control"/>
//                 </div>
//                 <div className="form-group">
//
//                     <input type="number" ref="age" id="age" defaultValue={age_to_edit} className="form-control"/>
//                 </div>
//
//                 <input type="hidden" ref="key" defaultValue={name_to_edit} className="form-control"/>
//                 <div className="form-group">
//                     <button type="submit" className="btn btn-primary">{mode_current} user</button>
//                 </div>
//             </form>
//         );
//     }
// }
// class UsersList extends React.Component {
//     render() {
//         if (!this.props.displayed) {
//             console.log("In user list");
//             var users_set = this.props.users;
//             var userList = this.props.users.map(function (user) {
//                 return <User name={user.name} age={user.age} users_set={users_set} link={user._links.self.href}/>;
//             });
//
//             return (
//
//                 <table className="table table-striped">
//
//                     <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                     </thead>
//                     <tbody>{userList}</tbody>
//                 </table>
//
//
//             );
//         } else {
//             return null;
//         }
//     }
//
// }


ReactDOM.render(
    <Users />, document.getElementById('app')
);
