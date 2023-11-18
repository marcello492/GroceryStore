// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box style={{ flexGrow: 1 }}>
                    <Link to="/">
                        <img src="cartpool/src/assets/cartpool_logo.png" alt="CartPool Logo" style={{ maxHeight: 50 }} />
                    </Link>
                </Box>
                <Button color="inherit" component={Link} to="/shopper-signin">Shopper Sign In</Button>
                <Button color="inherit" component={Link} to="/driver-signin">Driver Sign In</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
