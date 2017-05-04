var Users = React.createClass({

    componentDidMount: function () {
        console.log("Inside component did mount of users ");
        var ref = this.props.employees;
        // ref.on('value', function(snap) {
        var items = [];
        var mode
        console.log(this.props.employees);
        ref.forEach(function (val) {

            var item = val;
            item.key = val.name;
            items.push(item);
        });

        this.setState({
            users: items

        });
        // }.bind(this));
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
        console.log(newUser);
        console.log(this.state);
        var ref = this.state.users;
        newUser.key = newUser.name;
        ref.push(newUser);
        console.log("on new users");
        this.setState({
            formDisplayed: false

        });
    },

    onRemoveUser: function (user) {

    },

    render: function () {
        console.log("in render of users");
        console.log(this.state.mode);

        return (
            <div className="container">
                <h2>React with spring</h2>
                <p>A simple CRUD application with spring boot and react</p>
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
        var obj = {};
        var name = this.props.name;
        var obj = this.props.users_set;
        this.props.users_set.forEach(function (data, index) {

            if (data.name == name) {
                console.log(index);
                obj.splice(index)
            }
        });
        ReactDOM.render(
            <Users employees={obj}/>, document.getElementById('app')
        );
    },

    editUser: function () {
        console.log('edit user')
        var obj = this.props.users_set;

        console.log(obj);
        ReactDOM.render(

            <UserForm displayed={true} mode_current={'edit'} users_set={obj} user_to_edit={this.props}/>, document.getElementById('app')
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
                                onClick={this.editUser}>Edit</button>
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
            var obj1=this.props.users_set;
            var obj2=[];
            console.log(this.props.users_set);
            this.props.users_set.forEach(function (data, index) {

                if (data.key == existingUser.key) {
                data.name=existingUser.name
                    data.age=existingUser.age
                obj2.push(data)
                }
                else
                {
                    obj2.push(data)
                }
            });
            console.log('editing complete');
            console.log(obj2);
            ReactDOM.render(
                <UsersList users={obj2}/>, document.getElementById('app')
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
        var name_to_edit=null
        var age_to_edit=null
        if(this.props.user_to_edit) {

             name_to_edit = this.props.user_to_edit.name
             age_to_edit = this.props.user_to_edit.age
        }
        return (

            <form style={styles} ref="userForm" id="userForm" onSubmit={this.handleForm}>
                <div className="form-group">
                    <input type="text" ref="name" id="name" defaultValue={name_to_edit} className="form-control" />
                </div>
                <div className="form-group">

                <input type="number" ref="age" id="age" defaultValue={age_to_edit} className="form-control" />
                </div>

                    <input type="hidden"  ref="key"  defaultValue={name_to_edit} className="form-control" />
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{mode_current} user</button>
            </div>
            </form>
        );
    }
});
var UsersList = React.createClass({


    render: function () {
        if(!this.props.displayed)
        { console.log("In user list");
        var users_set = this.props.users;

        var userList = this.props.users.map(function (user) {
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
    }else
        {
            return null;
        }
}

});
var EMPLOYEES = [
    {name: 'Joe Biden', age: 45},
    {name: 'President Obama', age: 54},
    {name: 'Crystal Mac', age: 34},
    {name: 'James Henry', age: 33}
];

ReactDOM.render(
    <Users employees={EMPLOYEES}/>, document.getElementById('app')
);
