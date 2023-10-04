import { useEffect, useState } from 'react'
import './App.css'

import EmployeeList from './Screens/EmployeeList/EmployeeList'
import AddEmployee from './Screens/AddEmployee/AddEmployee';
import { IndexedDB, initDB } from "react-indexed-db-hook";
import { DBConfig } from './utils/DbConfig';
import { Route,  Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  const [db, setDb] = useState(null);


initDB(DBConfig);


  return (
    <IndexedDB
    name="MyDB"
    version={1}
    objectStoresMeta={[
      {
        store: "employees",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "name", keypath: "name", options: { unique: false } },
          { name: "role", keypath: "role", options: { unique: false } },
          { name: "fromDate", keypath: "fromDate", options: { unique: false } },
          { name: "email", keypath: "email", options: { unique: false } },]
      },
    ]}
  >
    <main className='bg-[#FFFFFF] h-screen'>
    <Toaster position='bottom-center' />
    <Routes>
     
        <Route   path="/" element={<EmployeeList/> } />
        <Route path="/addEmployee" element={<AddEmployee/>} />
        <Route path="/updateEmployee/:id" element={<AddEmployee/>} />
   
    </Routes>
    </main>
    </IndexedDB>
  )
}

export default App
