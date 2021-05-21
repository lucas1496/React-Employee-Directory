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
      </table>
    );
  };
  
  export default Table;