import React from 'react'
import EmployeeReports from './EmployeeReports'
import FormHeader from './FormHeader'
import ReportTable from './ReportTable'
import Footer from './footer'
import ReportForm from './ReportForm'

const Reports = () => {
    return (
        <>
            <div className="top-card">
                <FormHeader/>
                <div className="p-3">
                    <EmployeeReports />
                </div>
            </div>
            <div className="top-card">
                <div className="p-3">
                    <ReportTable/>
                </div>
            </div>
            <Footer/>
            {/* <ReportForm /> */}
        </>
    )
}

export default Reports