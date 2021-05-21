import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <nav className="navbar bg-dark justify-content-center"> 
        <form className="form-inline m-2">
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
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary justify-content-center">
          Search
        </button>
      </nav>
    );
};
  
export default SearchForm;