import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import Table from "../Table";

class MainContainer extends Component {
    state = {
      search: "",
      employees: [],
      filteredEmployees: [],
      sort: this.sortDirection,
    };
    
    // sortDirection function created so we can sort asc and desc
    sortDirection() {
      return {
        name: "",
        phone: "",
        email: "",
        dob: "",
      };
    }
  
    // Load employees when component mounts
    componentDidMount() {
      API.getRandomEmployees()
        .then((res) => this.setState({ employees: res.data.results, filteredEmployees: res.data.results }))
        .catch((err) => console.log(err));
    }
  
    // Filters employee by name as input changes
    handleInputChange = (event) => {
      const value = event.target.value;
      this.setState({ search: value });
      this.filterEmployees(value.toLowerCase().trim());
    
    };
  
    handleFormSubmit = (event) => {
      event.preventDefault();
    };
  
    // Sort with the key of specified object. Sorts by last name and then by first name
    sortBy = (key, primary = 0, secondary = 0) => {
      let sortedEmployees = this.state.filteredEmployees;
      if (this.state.sort[key]) {
        this.setState({
          filteredEmployees: sortedEmployees.reverse(),
          sort: {
            ...this.sortDirections,
            [key]: this.state.sort[key] === "asc" ? "desc" : "asc",
          },
        });
      } else {
        sortedEmployees = this.state.filteredEmployees.sort((x, y) => {
          x = x[key];
          y = y[key];

          if (primary) {
            if (secondary && x[primary] === y[primary]) {
              return x[secondary].localeCompare(y[secondary]);
            }
            return x[primary].localeCompare(y[primary]);
          } else {
            return x.localeCompare(y);
          }
        });
  
        this.setState({
          filteredEmployees: sortedEmployees,
          sort: {
            ...this.sortDirections,
            [key]: "asc",
          },
        });
      }
    };
  
    filterEmployees = (input) => {
      if (input) {
        this.setState({
          filteredEmployees: this.state.employees.filter((employee) => {
            return (
              employee.name.first
                .toLowerCase()
                .concat(" ", employee.name.last.toLowerCase())
                .includes(input) ||
              employee.phone.includes(input) ||
              employee.email.includes(input) ||
              this.formatDate(employee.dob.date).includes(input)
            );
          }),
        });
      } else {
        this.setState({ filteredEmployees: this.state.employees });
      }
    };
  
    formatDate = (date) => {
      date = new Date(date);
      let birthdate = [];
      birthdate.push(("0" + (date.getMonth() + 1)).slice(-2));
      birthdate.push(("0" + date.getDate()).slice(-2));
      birthdate.push(date.getFullYear());
  
      // Join formatted date
      return birthdate.join("/");
    };
  
    render() {
      return (
        <>
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <div className="container">
            <Table
              state={this.state}
              sortBy={this.sortBy}
              filterEmployees={this.filterEmployees}
              formatDate={this.formatDate}
            />
          </div>
        </>
      );
    }
};
  
export default MainContainer;