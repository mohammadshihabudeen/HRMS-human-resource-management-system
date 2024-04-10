import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from '../pim/AddEmployee/AddEmployee';
import EmployeeList from '../pim/Employee List/EmployeeList';
import PimLayout from '../pim/PimLayout';
import ReportForm from '../pim/Reports/ReportForm';
import Reports from '../pim/Reports/Reports';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Admin Page</div>} />
            <Route path='/Pim' element={<PimLayout />}>
                <Route index element={<div>Configuration Page</div>} />
                <Route path='EmployeeList' element={<EmployeeList/>} />
                <Route path='AddEmployee' element={<AddEmployee />} />
                <Route path='Reports' element={<Reports/>} />
                <Route path='Reports/ReportForm' element={<ReportForm/>} />
                
            </Route>
        </Routes>
    );
};

export default AppRoutes;
