import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';

function App() {
  const [tableData, setTableData] = useState([
    { name: "Mohan", email: "mohan@gmail.com", post: "Client Manager"},
    { name: "Sweety", email: "sweety@gmail.com", post: "Recruitment Success"},
    { name: "Chilman Mehrota", post: "Client Manager"},
    { name: "Saboor Sirwal",  post: "Recruitment Success"},
    { name: "Snriti Wadhwa",},
    { name: "Vanishri", email: "vani@spottabl.com", post: "Client Manager"},
    { name: "Vishal N", email: "vishal@spottabl.com", post: "Senior Manager"},
    { name: "Vidya Nagesh", email: "vidya@spottabl.com", post: "Recruitment Success"},
    {name:"Ajith KP", email:"ajith@spottabl.com", post:"Associate Principal"},
    {name:"Arbaaz Khatri", email:"arbaz@spotabble.com", post:"Talent Acquisition Specialist"}
  ])
  const columns = [
    { title: "Name", field: "name", align: "center" },
    { title: "Email", field: "email", align: "center"},
    { title: "Post", field: "post", align: "center"},
  ]
  return (
    
    
    <div className="App">
      <div className="header">
        <img className='spotimage' src="download.png"/>
        <span >
      <h1 className="topmargin" align="left">YOUR SPOTTABL TEAM</h1>
      <p className="nomargin" align="left">Spottabl supports all throughout </p>
      </span>
      </div>
      <MaterialTable  columns={columns} data={tableData}
        editable={{
          // onRowAdd: (newRow) => new Promise((resolve, reject) => {
          //   setTableData([...tableData, newRow])

          //   setTimeout(() => resolve(), 500)
          // }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        actions={[
          {
            icon: () => <button className="buttoncsm">Add CSM</button>,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "left" ,searchFieldStyle:{width:800,}, searchFieldVariant: "outlined",actionsColumnIndex: -1, selectionProps: rowData => ({
            disabled: rowData.age == null,
          
          }),
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "white",color:"black"}
        }}
        
        title="Customer Success Managers" 
        />
        </div>
        
  );
}

export default App;
