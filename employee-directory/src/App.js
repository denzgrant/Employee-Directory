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
        />
      </>
    );
  }
}

export default App;
