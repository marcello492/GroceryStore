// ShopperSignUp.js
import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import shoppingCartIcon from '../../assets/shopping_cart.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/cartpool_logo.png';

const ShopperSignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // If password and confirm password do not match, show an error
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/shopper-sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    email: formData.email,
                    password: formData.password
                    // confirmPassword is not needed for the backend
                })
            });

            const responseData = await response.json();

            if (response.ok) {
                // Handle successful registration, e.g., redirect to sign-in page
                console.log('User registered:', responseData);
                // Redirect or update UI here
            } else {
                // Handle errors, e.g., show error message to user
                console.error('Sign-up failed:', responseData.error);
                // Show error message here
            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network error, e.g., show error message to user
        }
    };

    return (
        <>
            <Box component={Link} to="/" sx={{ position: 'absolute', top: 0, left: 0, padding: '0rem' }}>
                <img src={logo} alt="CartPool Logo" style={{ maxHeight: '200px' }} />
            </Box>

            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ mt: 8, py: 4, px: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <img src={shoppingCartIcon} alt="Shopper" style={{ height: 100 }} />
                                    <Typography variant="h5" gutterBottom>
                                        Shopper Sign-Up
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    );
};

export default ShopperSignUp;
