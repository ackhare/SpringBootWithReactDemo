
var Users = React.createClass({

    componentDidMount: function() {
        var ref =this.props.employees;
        // ref.on('value', function(snap) {
            var items = [];
               console.log(this.props.employees);
            ref.forEach(function(val) {
                console.log(val);
                var item = val;
                item.key = val.name;
                items.push(item);
            });

            this.setState({
                users: items
            });
        // }.bind(this));
    },

    getInitialState: function() {
        return {
            users: [],
            formDisplayed: false
        };
    },

    onToggleForm: function() {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },

    onNewUser: function(newUser) {
        console.log(newUser);
        console.log(this.state);
        var ref = this.state.users;
        newUser.key=newUser.name;
        ref.push(newUser);
        //console.log(ref);
    },

    onRemoveUser: function(user) {

    },

    render: function() {
        console.log("in render of users");
        return (
            <div className="container">
                <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
                <UserForm  displayed={this.state.formDisplayed} onNewUser={this.onNewUser}/>
                <UsersList users={this.state.users}/>
            </div>
        );
    }
});


var User = React.createClass({
  render: function() {
    return(
      <li className="list-group-item">
        <span>{this.props.id}.</span> <span>Name: {this.props.name}</span> <span>Age: {this.props.age}</span>
      </li>
      );
  }
});
var ShowAddButton = React.createClass({
    render: function() {

        var classString, buttonText,button;

        if (this.props.displayed) {
            classString = 'btn btn-info btn-block';
            button = 'Cancel';
        } else {
            classString = 'btn btn-success btn-block';
            button = 'Create New User';
        }
        return (
            <button className={classString} onClick={this.props.onToggleForm}>{button}</button>
        );
    }
});

var UserForm = React.createClass({

    handleForm: function(e) {
        e.preventDefault();
        console.log(ReactDOM.findDOMNode(this.refs.name).value);
        var newUser = {
            name:ReactDOM.findDOMNode(this.refs.name).value,
            age:ReactDOM.findDOMNode(this.refs.age).value
        };
               ReactDOM.findDOMNode(this.refs.userForm).reset();
        //this.refs.userForm.getDOMNode().reset();

        this.props.onNewUser(newUser);

    },

    render: function() {
        var display = this.props.displayed ? 'block': 'none';
        var styles = {
            display: display
        };
        return (
            <form style={styles} ref="userForm" id="userForm" onSubmit={this.handleForm}>
                <div className="form-group">
                    <input type="text" ref="name" className="form-control" placeholder="Name"/>
                    <input type="number" ref="age" className="form-control" placeholder="Age"/>
                    <button type="submit" className="btn btn-primary btn-block">Add user</button>
                </div>
            </form>
        );
    }
});
var UsersList = React.createClass({


    render: function() {
         console.log("In user list");
          console.log("mmmmm"+this.props.users);

            var userList = this.props.users.map(function(user) {
              return <User name={user.name} id={user.id} age={user.age} />;
            });
        return (
            <ul className="list-group">
                {userList}
            </ul>
        );
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
