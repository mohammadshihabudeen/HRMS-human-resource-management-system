import React from 'react';
import { Link, useLocation ,Outlet} from 'react-router-dom';
import './PimLayout.css'
const PimLayout = () => {
    const location = useLocation();

    return (
        <div>
            <ul className="nav pim-nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/Pim" ? "pim-active" : ""}`} to="/Pim">Configuration</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/Pim/EmployeeList" ? "pim-active" : ""}`} to="/Pim/EmployeeList">Employee List</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/Pim/AddEmployee" ? "pim-active" : ""}`} to="/Pim/AddEmployee">Add Employee</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/Pim/Reports" ? "pim-active" : ""}`} to="/Pim/Reports">Reports</Link>
                </li>
            </ul>
            <Outlet /> {/* Renders the nested routes */}
        </div>
    );
};

export default PimLayout;
