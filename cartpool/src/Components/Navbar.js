// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/cartpool_logo.png'; // Your logo path

const Navbar = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Link to="/">
                    <img src={logo} alt="CartPool Logo" style={{ height: 200 }} />
                </Link>
                <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
                {/* Leave space for potential additional navbar items */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
