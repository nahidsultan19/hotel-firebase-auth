import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='d-flex align-items-center justify-content-center '>
            <h2>Copyright &copy; {year}</h2>
        </footer>
    );
};

export default Footer;