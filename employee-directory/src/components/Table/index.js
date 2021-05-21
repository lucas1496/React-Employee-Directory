import React from "react";

const Table = (props) => {
    return (
      <table className="table table-sortable text-center">
        <thead>
          <tr>
            <th>Employee</th>
            <th data-field="name" data-sortable="true">
              <i className="fa fa-fw fa-sort" onClick={() => props.sortBy("name", "last", "first")}></i>
              <span>Name</span>
            </th>
            <th>
              <i className="fa fa-fw fa-sort" onClick={() => props.sortBy("email")}></i>
              <span>Email</span>
            </th>
            <th>
              <i className="fa fa-fw fa-sort" onClick={() => props.sortBy("phone")}></i>
              <span>Phone</span>
            </th>
            <th>
              <i className="fa fa-fw fa-sort" onClick={() => props.sortBy("dob", "date")}></i>
              <span>Birthdate</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.state.filteredEmployees.map((employee) => {
            const { first, last } = employee.name;
            const fullName = `${first} ${last}`;
  
            // Format date
            const birthdate = props.formatDate(employee.dob.date);
  
            return (
              <tr key={employee.login.uuid}>
                <td>
                  <img src={employee.picture.thumbnail} alt={fullName} />
                </td>
                <td className="align-middle">{fullName}</td>
                
                <td className="align-middle email">
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </td>
                <td className="align-middle">
                <a href={`tel:+1${employee.phone}`}>{employee.phone}</a></td>
                <td className="align-middle">{birthdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default Table;