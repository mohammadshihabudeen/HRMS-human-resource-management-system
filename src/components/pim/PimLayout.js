import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import HeaderStyle from '../Header/Header.module.css'
const PimLayout = () => {
    const location = useLocation();

    return (
        <div>
            <ul  className={HeaderStyle.pim_nav_tabs}>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link1} ${location.pathname === "/Pim" ? HeaderStyle.pim_active : ""}`} to="/Pim">Configuration</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link1} ${location.pathname === "/Pim/EmployeeList" ? HeaderStyle.pim_active : ""}`} to="/Pim/EmployeeList">Employee List</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link1} ${location.pathname === "/Pim/AddEmployee" ? HeaderStyle.pim_active : ""}`} to="/Pim/AddEmployee">Add Employee</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link1} ${location.pathname.includes("/Pim/Reports") || location.pathname.includes("/Pim/Reports/ReportForm") ?  HeaderStyle.pim_active : ""}`} to="/Pim/Reports">Reports</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default PimLayout;
