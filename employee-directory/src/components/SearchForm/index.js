import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <nav className="navbar navbar-light bg-light justify-content-center"> 
        <form className="form-inline m-2">
          <div className="form-group">
            <input
              value={props.value}
              onChange={props.handleInputChange}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for an employee"
            />
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
              Search
            </button>
          </div>
        </form>
      </nav>
    );
}
  
export default SearchForm;