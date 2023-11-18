// src/components/Homepage.js
import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import carIcon from '../assets/car.png'; // Your car icon path
import shoppingCartIcon from '../assets/shopping_cart.png'; // Your shopping cart icon path
import logo from '../assets/cartpool_logo.png'; // Your logo path
import { Link } from 'react-router-dom';

const Homepage = () => {
    const paperHeight = '500px'; 

    return (
        <>
            {/* Absolute positioning of the logo */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, padding: '0rem' }}>
                <img src={logo} alt="CartPool Logo" style={{ maxHeight: '200px' }} />
            </Box>


            <Container maxWidth="30 vw" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Container style={{ marginBottom: '30px'}}>
                    <Typography marginBottom="0px" variant="h2" color="textPrimary" gutterBottom>
                        CartPool
                    </Typography>
                    <Typography variant="h5" color="textSecondary">
                        Your ride to the grocery store
                    </Typography>
                </Container>
                
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Paper sx={{ padding: '2rem', backgroundColor: '#00bcd4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: paperHeight }}>
                            <img src={carIcon} alt="Driver Sign-In" style={{ width: '80%', height: 'auto' }} />
                            <Button component={Link} to="/driver-signin" variant="contained" color="primary" fullWidth sx={{ mt: '1rem' }}>
                                <Typography variant="h6">Driver Sign-In</Typography>
                            </Button>
                        </Paper>
                    </Grid>
                <Grid item xs={12} sm={6}>
                        <Paper sx={{ padding: '2rem', backgroundColor: '#ffc107', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: paperHeight }}>
                            <img src={shoppingCartIcon} alt="Shopper Sign-In" style={{ width: '80%', height: 'auto' }} />
                            <Button component={Link} to="/shopper-signin" variant="contained" color="secondary" fullWidth sx={{ mt: '1rem' }}>
                                <Typography variant="h6">Shopper Sign-In</Typography>
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Homepage;
