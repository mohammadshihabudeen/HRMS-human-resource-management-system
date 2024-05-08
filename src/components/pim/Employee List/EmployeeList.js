import React from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeTable from './EmployeeTable'
import FormHeader from './FormHeader'
import "./EmployeeList.css"
const EmployeeList = () => {
    return (
        <>
            <div className='top-card'>
                <FormHeader />
                <div className="p-3">
                    <EmployeeForm />
                </div>
            </div>
            <div className='top-card'>
                <div className="p-3">
                    <EmployeeTable />
                </div>
            </div>
        </>
    )
}

export default EmployeeList