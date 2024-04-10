import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer">
            <p><a href=""style={{ color: 'black' }} >HRMS</a> &copy; {currentYear} All Rights Reserved</p>
        </footer>
    );
};

export default Footer;