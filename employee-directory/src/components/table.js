import React from 'react';
import MaterialTable from 'material-table';




const MaterialEmployTable = () => {
  const data = [
    { name: 'Bob', alias: 22 },
    { name: 'Bob', alias: 22 },
    { name: 'Bob', alias: 22 },
    { name: 'Bob', alias: 22 },
    { name: 'Bob', alias: 22 }
  ]
  const columns = [
    {
      title: 'ID', field: 'id'
    },
    {
      title: 'Name', field: 'name'
    },
    {
      title: 'Alias', field: 'alias'
    },
    {
      title: 'Squad', field: 'squad'
    },
  ]
  return (
    <div style={{
      fontSize: 20,
      margin: 2,
      textAlign: 'center',
    }}
    >
      <MaterialTable style={{
        color: 'black'

    }} title="X-Men"
        data={data}
        columns={columns}
        options={{
          paging: false,

        }}

      />
    </div>

  );
}

export default MaterialEmployTable;