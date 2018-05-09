import React, { Component } from 'react'
import employees from './employees'
import NumberFormat from 'react-number-format'

class App extends Component {
  render() {
    console.log(employees)
    return (
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Salary</th>
        </tr>
        {employees.map((employee) =>
          <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.company}</td>
            <td><NumberFormat value={employee.salary} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
          </tr>
        )}
      </table>
    );
  }
}

export default App; 
