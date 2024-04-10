import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PimLayout from '../pim/PimLayout';
import AddEmployee from '../pim/AddEmployee/AddEmployee';
import EmployeeList from '../pim/Employee List/EmployeeList';
import Reports from '../pim/Reports/Reports';
import ReportForm from '../pim/Reports/ReportForm';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Admin Page</div>} />
            <Route path='/Pim' element={<PimLayout />}>
                <Route index element={<div>Configuration Page</div>} />
                <Route path='/EmployeeList' element={<EmployeeList />} />
                <Route path='/AddEmployee' element={<AddEmployee />} />
                <Route path='/Reports'>
                    <Route index element={<Reports />} />
                    <Route path='/ReportForm' element={<ReportForm />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
