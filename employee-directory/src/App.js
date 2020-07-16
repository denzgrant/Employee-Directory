import React from 'react';
import Header from "./components/header";
import Title from "./components/title";
import MaterialEmployTable from "./components/table"
import employees from "./employees.json";







function App() {
  return (
    <>
      <Header />
      <Title />
      <MaterialEmployTable
      name={employees[0].name}
      alias={employees[0].alias}
      squad={employees[0].occupation}
      />
    </>
  );
}


export default App;
