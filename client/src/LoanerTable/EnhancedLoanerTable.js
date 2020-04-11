import React from 'react';
import MaterialTable from 'material-table';




const EnhancedLoanerTable = props => {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: 'Name', field: 'name' },
//       { title: 'Surname', field: 'surname' },
//       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//       { title: 'Birth Place', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },},
//     ],
//     data: [
//       { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//       { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34,},
//     ],
//   });

  console.log(props)

const parsedLoaners = props.loaners.map(loaner => {
    const newLoaner = loaner
    newLoaner.stockNum = loaner.identifiers.stockNum
    newLoaner.plate = loaner.identifiers.plate
    newLoaner.model = `${loaner.identifiers.year} ${loaner.identifiers.model} ${loaner.identifiers.trim}`
    newLoaner.status = loaner.isOut ? 'Out' : loaner.isReserved ? 'Reserved' : ''
    return newLoaner
})

console.log(parsedLoaners)

const columns = [
    { title: 'Stock Number', field: 'stockNum' },
    { title: 'Plate', field: 'plate' },
    { title: 'Year/Model/Trim', field: 'model' },
    { title: 'Check-Out Status', field: 'status' },
]
// const [state, setState] = React.useState({data: parsedLoaners})

// console.log(state.data)

  return (
    <MaterialTable
      title="LOANER TABLE"
      columns={columns}
      data={parsedLoaners}
      options={{pageSize: 10}}
      editable={
        // {
        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //     //   setState(prevState => {
        //     //     const data = [...prevState.data];
        //     //     data.push(newData);
        //     //     return { ...prevState, data };
        //     //   });
        //     }, 600);
        //   }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       if (oldData) {
        //         setState(prevState => {
        //           const data = [...prevState.data];
        //           data[data.indexOf(oldData)] = newData;
        //           return { ...prevState, data };
        //         });
        //       }
        //     }, 600);
        //   }),
        {onRowDelete: e => new Promise((resolve, reject) => {
            console.log(e)
            resolve()
        })
        }
    }
    />
  );
}

export default EnhancedLoanerTable