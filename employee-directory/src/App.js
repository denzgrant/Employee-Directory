import React, { Component } from 'react';
import Header from "./components/header";
import MaterialEmployTable from "./components/table"
import employees from "./employees.json";



class App extends Component {
  state = {
    employees
  };

  
  render() {
    return (
      <>
        <Header />
        <MaterialEmployTable
          id={employees[0].id}
          name={employees[0].name}
          alias={employees[0].alias}
          squad={employees[0].squad}
          email={employees[0].email}
        />
      </>
    );
  }
}

export default App;
