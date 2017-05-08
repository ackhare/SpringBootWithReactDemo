/**
 * Created by chetan on 8/5/17.
 */
import React from 'react';
export class ShowAddButton extends React.Component {
    render() {

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
}


module.exports = ShowAddButton;