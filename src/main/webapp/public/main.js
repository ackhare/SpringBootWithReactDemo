'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users';
import LoginPage from './components/LoginPage';
class App extends React.Component {
    constructor() {
        super();
        this.state = {authenticatedUser: ""};
        // this.editUser = this.editUser.bind(this);
    }


    componentDidMount() {
        var ref;
        console.log("Inside component did mount of users ");
        var self = this;
        var mode;
        $.ajax({
            url: "http://localhost:8080/api/isLogin",
        }).then(function (data) {
            console.log("success in editing  in component did mount of users");
            console.log(data);
            //self.setState({users: data._embedded.employees});

        });
    }

    render() {
        return (
            // <li className="list-group-item">
            <div>
                <LoginPage displayed={this.state.formDisplayed}/>
            </div>
        );
    }
}
ReactDOM.render(
    <App />, document.getElementById('app')
);
