import React from 'react'
import EmployeeReports from './EmployeeReports'
import FormHeader from './FormHeader'
import ReportTable from './ReportTable'
import Footer from './footer'

const Reports = () => {
    return (
        <>
            <div className="card mt-2 m-4" style={{ backgroundColor: "#F5F5F5" }}>
                <FormHeader/>
                <div className="card-body">
                    <EmployeeReports />
                </div>
            </div>
            <div className="card  mt-3 m-4" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="card-body">
                    <ReportTable/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Reports