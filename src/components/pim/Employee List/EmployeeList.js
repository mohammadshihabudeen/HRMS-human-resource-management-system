import React from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeTable from './EmployeeTable'
import FormHeader from './FormHeader'
const EmployeeList = () => {
    return (
        <>
            <div className="card mt-3 m-4" style={{ backgroundColor: "#F5F5F5" }}>
                <FormHeader />
                <div className="card-body">
                    <EmployeeForm />
                </div>
            </div>
            <div className="card  mt-3 m-4" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="card-body">
                    <EmployeeTable />
                </div>
            </div>
        </>
    )
}

export default EmployeeList