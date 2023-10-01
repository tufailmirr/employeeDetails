import { useState } from 'react'
import './App.css'

import EmployeeList from './Screens/EmployeeList/EmployeeList'
import AddEmployee from './Screens/AddEmployee/AddEmployee'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-[#FFFFFF]'>
  {/* <Input 
  leftIcon={<MdOutlinePerson color="#1D9FEE" size={24} />}
  /> */}
      {/* <EmployeeList/> */}
      <AddEmployee/>
    </main>
  )
}

export default App
