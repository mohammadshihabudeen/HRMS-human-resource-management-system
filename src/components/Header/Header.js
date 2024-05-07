import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const location = useLocation();

    return (
        <div className='overflow-hidden'>
            <div className="row d-flex justify-content-between">
                <div className="col-md-9 d-flex align-items-center">
                    <img src="../assets/logo.png" alt="logo" height="50px" width="50px" className='mx-3 ' />
                    <p className=' h4 title'>ONLINE HUMAN RESOURCE MANAGEMENT SYSTEM</p>
                </div>
                <div className="col-md-2 p-3 d-flex flex-column align-items-center justify-content-end">
                    <a href="" className="mx-3  align-self-end"><img src="../assets/circle.png" alt="logo" height="25px" width="25px"/></a>
                    <span className='mx-3 align-self-end d-flex'><p >Welcome shihab</p><img className='mx-1 mt-1' src="../assets/user.png" alt="logo" height="16px" width="16px"/></span>
                </div>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname == "/" ? "active" : ""}`} to="/">Admin</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${location.pathname.includes("/Pim") ? "active" : ""}`} to="/Pim">Pim</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${location.pathname.includes("/Leave") ? "active" : ""}`} to="/Leave">Leave</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${location.pathname.includes("/Time") ? "active" : ""}`} to="/Time">Time</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${location.pathname.includes("/Recruitment") ? "active" : ""}`} to="/Recruitment">Recruitment</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${location.pathname.includes("/Payroll") ? "active" : ""}`} to="/Payroll">Payroll</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${location.pathname.includes("/MyInfo") ? "active" : ""}`} to="/MyInfo">My Info</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${location.pathname.includes("/Mails") ? "active" : ""}`} to="/Mails">Mails</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
