import React from 'react'
import Header from './Header'
import './AddEmployee.css'
import AddEmployeeForm from './AddEmployeeForm'
const AddEmployee = () => {
  return (
    <div className='top-card'>
      <Header />
      <AddEmployeeForm />
    </div>
  )
}

export default AddEmployee