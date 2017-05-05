var Users = React.createClass({
    componentWillReceiveProps: function () {
        console.log("run be");
        var self = this;
        if (this.props.fromAjax) {
            $.ajax({
                url: "http://localhost:8080/api/employees",
            }).then(function (data) {
                // console.log("gsgsfgsgsfg");
                // console.log(data)

                self.setState({users: data._embedded.employees});


            });
        }
    },

    componentDidMount: function () {
        var ref;
        console.log("Inside component did mount of users ");
        var self = this;
        // ref.on('value', function(snap) {

        var mode
        var items = [];
        var ref;
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/employees",
        }).then(function (data) {
            // console.log("gsgsfgsgsfg");
            // console.log(data)
            ref = data._embedded.employees;
            self.setState({users: data._embedded.employees});


        });
    },

    getInitialState: function () {
        return {
            users: [],
            formDisplayed: false,
            mode: 'create'
        };
    },

    onToggleForm: function () {
        console.log('toggled');
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },


    onNewUser: function (newUser) {
        // console.log(newUser);
        // console.log(this.state);
         var self = this;
        // newUser.key = newUser.name;
        // ref.push(newUser);
        // console.log("on new users");
        $.ajax({
            url: "http://localhost:8080/api/employees",
            type: "POST",
            data: JSON.stringify({name: newUser.name, age: newUser.age}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
               console.log("succ");
                self.setState({
                    formDisplayed: false

                });
            }
        })


    },

    onRemoveUser: function (user) {

    },

    render: function () {
        console.log("in render of users");
        console.log(this.state.users);
        console.log(this.props.fromAjax);

        console.log(this.state.users);
        return (
            <div>
                <UserForm displayed={this.state.formDisplayed} mode_current={'create'} onNewUser={this.onNewUser}/>
                <UsersList displayed={this.state.formDisplayed} users={this.state.users}/>
                <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>

            </div>
        );
    }
});


var User = React.createClass({
    deleteUser: function () {
        console.log(this.props.name);

        var name = this.props.name;
        var obj = this.props.users_set;
        // this.props.users_set.forEach(function (data, index) {
        //
        //     if (data.name == name) {
        //         console.log(index);
        //         obj.splice(index)
        //     }
        // });
        $.ajax({
            url: "http://localhost:8080/api/employees/1",
            type: 'DELETE',
            success: function (result) {
                // This sets a display state which determines whether to render or not.
                //     If the employee is deleted successfully, this variable is set to true.
                // The handleDelete method sends a delete request to the server (using the href
                // you got back from the get request). If successful, display
                // is set to false and the render is updated. Otherwise,
                // Toastr notifies the user that an error occurred.
                console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');

                ReactDOM.render(
                    <Users fromAjax={true}/>, document.getElementById('app')
                );

                console.log(result);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //<!--For that you can use Toastr which will allow you to show popups-->
                console.log("error");
                console.log(xhr.responseJSON);
                toastr.error(xhr.responseJSON.message);
            }
        });


    },

    editUser: function () {
        console.log('edit user')
        var obj = this.props.users_set;

        console.log(obj);
        ReactDOM.render(
            <UserForm displayed={true} mode_current={'edit'} users_set={obj}
                      user_to_edit={this.props}/>, document.getElementById('app')
        );
    },

    render: function () {

        return (
            // <li className="list-group-item">

            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>

                <td>
                    <button name="Edit" className="btn btn-primary" onClick={this.deleteUser}>Delete</button>
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
});
var ShowAddButton = React.createClass({
    render: function () {

        var classString, buttonText, button;

        if (this.props.displayed) {
            classString = 'btn btn-info ';
            button = 'Cancel';
        } else {
            classString = 'btn btn-success ';
            button = 'Create New User';
        }
        return (
            <div className="form-group">
                <button className={classString} onClick={this.props.onToggleForm}>{button}</button>
            </div>
        );
    }
});

var UserForm = React.createClass({

    handleForm: function (e) {
        e.preventDefault();
        console.log('user form');
        if (this.props.mode_current == 'create') {
            var newUser = {
                name: ReactDOM.findDOMNode(this.refs.name).value,
                age: ReactDOM.findDOMNode(this.refs.age).value
            };
            ReactDOM.findDOMNode(this.refs.userForm).reset();
            //this.refs.userForm.getDOMNode().reset();

            this.props.onNewUser(newUser);
        }
        else if (this.props.mode_current == 'edit') {
            console.log('handle edits');
            var existingUser = {
                name: ReactDOM.findDOMNode(this.refs.name).value,
                age: ReactDOM.findDOMNode(this.refs.age).value,
                key: ReactDOM.findDOMNode(this.refs.key).value,
            };
            console.log(existingUser);

        $.ajax({
            url: "http://localhost:8080/api/employees/5",
            type: "PUT",
            data: JSON.stringify({name: existingUser.name, age: existingUser.age}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
               console.log("succccccccccccccccccccccccccccccc");

            }
        })

            console.log('editing complete');
            // console.log(obj2);
            ReactDOM.render(
                <Users fromAjax={true}/>, document.getElementById('app')
            );
            // <UsersList users={this.state.users}/>
            console.log(existingUser);

        }
    },

    render: function () {
        var mode_current;
        var display = this.props.displayed ? 'block' : 'none';

        var styles = {
            display: display
        };

        if (this.props.mode_current == 'create') {
            mode_current = "Create"
        }
        else {
            mode_current = "Edit"
        }
        var current_mode = {

            mode_current: mode_current
        };
        console.log(this.props);
        var name_to_edit = null
        var age_to_edit = null
        if (this.props.user_to_edit) {

            name_to_edit = this.props.user_to_edit.name
            age_to_edit = this.props.user_to_edit.age
        }
        return (

            <form style={styles} ref="userForm" id="userForm" onSubmit={this.handleForm}>
                <div className="form-group">
                    <input type="text" ref="name" id="name" defaultValue={name_to_edit} className="form-control"/>
                </div>
                <div className="form-group">

                    <input type="number" ref="age" id="age" defaultValue={age_to_edit} className="form-control"/>
                </div>

                <input type="hidden" ref="key" defaultValue={name_to_edit} className="form-control"/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{mode_current} user</button>
                </div>
            </form>
        );
    }
});
var UsersList = React.createClass({


    render: function () {
//         console.log("render of userList");
//         console.log(this.props.users);
// for (var key in this.props.users) {
//     console.log("fffffffffffffffffff");
//     console.log(this.props.users[key]);
//   }

        if (!this.props.displayed) {
            console.log("In user list");
            var users_set = this.props.users;
            // this.props.users.forEach(function(val)
            // {
            //     console.log(val.name+"namea");
            // });
            var userList = this.props.users.map(function (user) {
                console.log("user");
                console.log(user);
                return <User name={user.name} age={user.age} users_set={users_set}/>;
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

});
// var EMPLOYEES = [
//     {name: 'Joe Biden', age: 45},
//     {name: 'President Obama', age: 54},
//     {name: 'Crystal Mac', age: 34},
//     {name: 'James Henry', age: 33}
// ];

ReactDOM.render(
    <Users />, document.getElementById('app')
);
