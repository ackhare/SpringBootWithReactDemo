import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList'
import ShowAddButton from './ShowAddButton'
import UserForm from './UserForm'
import LogoutPage from './LogoutPage'
import Users from './Users'

export class Header extends React.Component {
    constructor() {
        super();
        // this.state = {isLogin: "", loginError: "", username: "", authenticatedUser: "", authorities: ""};
        // this.login = this.login.bind(this);

    }

    render() {

        return (
            <div className="row">
                <div className="col-md-12">
                <div className="col-md-4">
                <h3>Welcome {this.props.username}</h3>
                </div>
                    <div className="col-md-4">


                    <h2>React with spring</h2>
                <p>A simple CRUD application with spring boot and react</p>
                    </div>
                    <div className="col-md-4">
<LogoutPage/>
                    </div>
            </div>
                </div>
        );

    }

}
module.exports = Header;
export default Header;