import React from 'react';
import MaterialTable from 'material-table';


const MaterialEmployTable = () => {

  const data = [
    {
      "id": 1,
      "name": "Cyclops",
      "alias": "Scott Summers",
      "squad": "Blue",
      "email": "ssummers@xmen.org"
    },
    {
      "id": 2,
      "name": "Beast",
      "alias": "Henry (Hank) McCoy",
      "squad": "Blue",
      "email": "hmccoy@xmen.org"
    },
    {
      "id": 3,
      "name": "Wolverine",
      "alias": "James Howlett",
      "squad": "Blue",
      "email": "donttryitbub@xmen.org"
    },
    {
      "id": 4,
      "name": "Psylocke",
      "alias": "Elizabeth (Betsy) Braddock",
      "squad": "Blue",
      "email": "ebraddock@xmen.org"
    },
    {
      "id": 5,
      "name": "Rogue",
      "alias": "Anna Marie",
      "squad": "Blue",
      "email": "jhowlett@xmen.org"
    },
    {
      "id": 6,
      "name": "Gambit",
      "alias": "Remy LeBeau",
      "squad": "Blue",
      "email": "rlebeau@xmen.org"
    },
    {
      "id": 7,
      "name": "Jubilee",
      "alias": "Jubilation Lee",
      "squad": "Blue",
      "email": "jlee@xmen.org"
    },
    {
      "id": 8,
      "name": "Storm",
      "alias": "Ororo Munroe",
      "squad": "Gold",
      "email": "omunroe@xmen.org"
    },
    {
      "id": 9,
      "name": "Jean Grey",
      "alias": "Jean Elaine Grey",
      "squad": "Gold",
      "email": "jgrey@xmen.org"
    },
    {
      "id": 10,
      "name": "Archangel",
      "alias": "Warren Worthington III",
      "squad": "Gold",
      "email": "wworthington@xmen.org"
    },
    {
      "id": 11,
      "name": "Iceman",
      "alias": "Bobby Drake",
      "squad": "Gold",
      "email": "brake@xmen.org"
    },
    {
      "id": 12,
      "name": "Colossus",
      "alias": "Piotr Rasputin",
      "squad": "Gold",
      "email": "prasputin@xmen.org"
    },
    {
      "id": 13,
      "name": "Forge",
      "alias": "Unknown",
      "squad": "Gold",
      "email": "funknown@xmen.org"
    },
    {
      "id": 14,
      "name": "Bishop",
      "alias": "Lucas Bishop",
      "squad": "Gold",
      "email": "lbishop@xmen.org"
    }
  ]
  const columns = [
    {
      title: 'ID', field: 'id',
      headerStyle: {
        backgroundColor: 'red',
        fontSize: 20,
        fontColor: 'Red'
      }

    },
    {
      title: 'Name', field: 'name',
      headerStyle: {
        backgroundColor: 'red',
        fontSize: 20,
        fontColor: 'Red'
      }
    },
    {
      title: 'Alias', field: 'alias',
      headerStyle: {
        backgroundColor: 'red',
        fontSize: 20,
        fontColor: 'Red'
      }
    },
    {
      title: 'Squad', field: 'squad',
      headerStyle: {
        backgroundColor: 'red',
        fontSize: 20,
        fontColor: 'Red'
      }
    },
    {
      title: 'Email', field: 'email',
      headerStyle: {
        backgroundColor: 'red',
        fontSize: 20,
        fontColor: 'Red'
      }
    }
  ]
  return (
    <div style={{
      fontSize: 25,
      margin: 10,
      textAlign: 'center',
    }}
    >
      <MaterialTable style={{
        color: 'Black',
        backgroundColor: 'yellow'

      }}
        title="The Uncanny X-Men '91"
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