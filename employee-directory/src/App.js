import React, { Component } from 'react';
import Header from "./components/header";
import MaterialEmployTable from "./components/table"




class App extends Component {

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
