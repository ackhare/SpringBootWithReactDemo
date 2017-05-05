// As described in the thinking in react tutorial, you should start coding
// your application by breaking the interface down into components.
//Here components are Employee and EmployeeTable

//Here you’ve created two—one for a table of employees and another for an employee entry.

//Each component then needs a render function which describes the HTML to generate.
var Employee = React.createClass({

    /*
     This instantiates a new Employee class for each element in the data (setting the employee attribute)
     and pushes it to an array. Then {rows} in EmployeeTable(below componenet) drops in the required HTML from the child class.
     */
    getInitialState: function () {
        return {display: true};
    },
    handleDelete() {
        var self = this;
        console.log(self.props.employee._links.self.href);
        $.ajax({
            url: self.props.employee._links.self.href,
            type: 'DELETE',
            success: function (result) {
                // This sets a display state which determines whether to render or not.
                //     If the employee is deleted successfully, this variable is set to true.
                // The handleDelete method sends a delete request to the server (using the href
                // you got back from the get request). If successful, display
                // is set to false and the render is updated. Otherwise,
                // Toastr notifies the user that an error occurred.
                self.setState({display: false});
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //<!--For that you can use Toastr which will allow you to show popups-->
                toastr.error(xhr.responseJSON.message);
            }
        });
    },

    render: function () {
        //     Try deleting an entry and refreshing the page. It should stay deleted.
        //
        //     Note: Restarting the server will bring back the same data
        // since you’re using an in-memory database.

        // This sets a display state which determines whether to render or not.
        //     If the employee is deleted successfully, this variable is set to true.
        // The handleDelete method sends a delete request to the server (using the href
        // you got back from the get request). If successful, display
        // is set to false and the render is updated. Otherwise,
        // Toastr notifies the user that an error occurred.

        if (this.state.display == false) return null;
        else return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.years}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
                </td>
                <td>
                    <button className="btn btn-info" onClick={this.handleEdit}>Edit</button>
                </td>
            </tr>
        );
    }
});

var EmployeeTable = React.createClass({

    render: function () {

        var rows = [];
        // Inside EmployeeTable you can access this using this.props
        //     . Let’s use that to generate a table with a row for each employee.
        this.props.employees.forEach(function (employee) {
            rows.push(
                <Employee employee={employee} key={employee.name}/>);
        });

        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Years</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

//Now create a wrapper class that returns an EmployeeTable in its render method.

var App = React.createClass({

    loadEmployeesFromServer: function () {

        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/employees",
        }).then(function (data) {
            self.setState({employees: data._embedded.employees});
        });

    },

    getInitialState: function () {
        return {employees: []};
    },

    componentDidMount: function () {
        this.loadEmployeesFromServer();
    },

    render() {
        return ( <EmployeeTable employees={this.state.employees}/> );
    }
});

//You need to tell React to insert the parent component’s HTML into the root element.
// This is done using the ReactDOM.render method.
ReactDOM.render(<App />, document.getElementById('root'));
/*
 You have to set state first by using getInitialState to initialise(in App), and
 then componentDidMount(in App) to do what’s needed when everything is loaded.

 Now replace the main ReactDOM.render with your new class.

 ReactDOM.render(<App />, document.getElementById('root') );


 On refresh you should see the same view as before, except now
 the data is being loaded from the server.
 */