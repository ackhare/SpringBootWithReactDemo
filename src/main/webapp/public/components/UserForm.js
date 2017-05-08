/**
 * Created by chetan on 8/5/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';


export class UserForm extends React.Component {
    constructor() {
        super();
        //this.state = {users: [], formDisplayed: false, mode: 'create'};
        this.handleForm = this.handleForm.bind(this);

    }

    handleForm(e) {
        e.preventDefault();
        if (this.props.mode_current == 'create') {
            var newUser = {
                name: ReactDOM.findDOMNode(this.refs.name).value,
                age: ReactDOM.findDOMNode(this.refs.age).value
            };

            //this.refs.userForm.getDOMNode().reset();

            this.props.onNewUser(newUser, this.refs.userForm);
        }
        else if (this.props.mode_current == 'edit') {
            var existingUser = {
                name: ReactDOM.findDOMNode(this.refs.name).value,
                age: ReactDOM.findDOMNode(this.refs.age).value,
                key: ReactDOM.findDOMNode(this.refs.key).value,
            };
            console.log("Inside editing");
            $.ajax({
                url: this.props.links,
                type: "PUT",
                data: JSON.stringify({name: existingUser.name, age: existingUser.age}),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function () {
                    console.log("success in editing");

                  return(ReactDOM.render(
                        <Users fromAjax={true}/>, document.getElementById('app')
                    ));
                }
            })

            console.log('editing complete');


        }
    }

    render() {
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
}
module.exports = UserForm;
export default UserForm;