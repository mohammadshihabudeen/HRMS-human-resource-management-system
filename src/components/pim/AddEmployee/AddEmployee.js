import React from 'react'
import Header from './Header'
import './AddEmployee.css'
import AddEmployeeForm from './AddEmployeeForm'
const AddEmployee = () => {
  return (
    <div className='addemployee mt-3 m-4'>
      <Header />
      <AddEmployeeForm />
    </div>
  )
}

export default AddEmployee