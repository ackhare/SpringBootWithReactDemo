//Here you’ve created two—one for a table of employees and another for an employee entry.

//Each component then needs a render function which describes the HTML to generate

// you should start coding your application by breaking the interface down into components.

// Here you’ve created two—one for a table of employees and another for an employee entry.

//     Each component then needs a render function which describes the HTML to generate
var Employee = React.createClass({
  handleDelete() {
    var self = this;

console.log(this.props.employee);
  },

    render: function () {
        return (
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
            </tr>);
    }
});


//As you might expect, this(<EmployeeTable employees={EMPLOYEES} />, document.getElementById('root'))
// passes the data into a variable named employees.
// Inside EmployeeTable you can access this using this.props.
// Let’s use that to generate a table with a row for each employee.
var EmployeeTable = React.createClass({
    render: function () {
        var rows = [];
        this.props.employees.forEach(function (employee) {
            /*
             This instantiates a new Employee class for each element
             in the data (setting the employee attribute) and pushes it to an array.
             Then {rows} drops in the required HTML from the child class.
             */
            rows.push(<Employee employee={employee}/>);
        });
        return (
            //     Here’s where the Babel compiler comes in to convert HTML
            // code into the correct React statements.
            //     Note how the div tags are returned from the render statement.
            <div class="container">
                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Years</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
});


var EMPLOYEES = [
    {name: 'Joe Biden', age: 45, years: 5},
    {name: 'President Obama', age: 54, years: 8},
    {name: 'Crystal Mac', age: 34, years: 12},
    {name: 'James Henry', age: 33, years: 2}
];
//You need to tell React to insert the parent component’s HTML into the root element.
// This is done using the ReactDOM.render method.
ReactDOM.render(
    <EmployeeTable employees={EMPLOYEES}/>, document.getElementById('root')
);
