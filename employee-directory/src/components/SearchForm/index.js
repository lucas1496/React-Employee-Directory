import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <nav className="navbar bg-dark justify-content-center"> 
        <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
          <div className="form-group">
            <input
              value={props.value}
              onChange={props.handleInputChange}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search employees"
            />
          </div>
        </form>
      </nav>
    );
};
  
export default SearchForm;