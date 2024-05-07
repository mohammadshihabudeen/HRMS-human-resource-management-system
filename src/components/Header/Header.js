import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderStyle from './Header.module.css'
const Header = () => {
    const location = useLocation();

    return (
        <div className={HeaderStyle.overflow_hidden}>
            <div className={HeaderStyle.header}>
                <div className={`col-md-9 ${HeaderStyle.inner_header1}`}>
                    <img src="../assets/logo.png" alt="logo" height="50px" width="50px" className='mx-3' />
                    <p className={HeaderStyle.title}>ONLINE HUMAN RESOURCE MANAGEMENT SYSTEM</p>
                </div>
                <div className={`col-md-2 p-3 ${HeaderStyle.inner_header2}`}>
                    <a href="" className="mx-3" style={{alignSelf:"end"}}><img src="../assets/circle.png" alt="logo" height="25px" width="25px"/></a>
                    <span className='mx-3' style={{display:'flex',alignSelf:'end'}}><p >Welcome shihab</p><img className='mx-1 mt-3' src="../assets/user.png" alt="logo" height="16px" width="16px"/></span>
                </div>
            </div>
            <ul className={HeaderStyle.nav} id="myTab" role="tablist">
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname == "/" ? HeaderStyle.active : ""}`} to="/">Admin</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname.includes("/Pim") ? HeaderStyle.active : ""}`} to="/Pim">Pim</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname.includes("/Leave") ? HeaderStyle.active : ""}`} to="/Leave">Leave</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname.includes("/Time") ? HeaderStyle.active : ""}`} to="/Time">Time</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname.includes("/Recruitment") ? HeaderStyle.active : ""}`} to="/Recruitment">Recruitment</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname.includes("/Payroll") ? HeaderStyle.active : ""}`} to="/Payroll">Payroll</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname.includes("/MyInfo") ? HeaderStyle.active : ""}`} to="/MyInfo">My Info</Link>
                </li>
                <li className={HeaderStyle.nav_item}>
                    <Link className={`${HeaderStyle.nav_link} ${location.pathname.includes("/Mails") ? HeaderStyle.active : ""}`} to="/Mails">Mails</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
