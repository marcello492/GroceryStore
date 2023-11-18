// ShopperSignUp.js
import React from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import shoppingCartIcon from '../../assets/shopping_cart.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/cartpool_logo.png';

const ShopperSignUp = () => {
    return (

        <>
        <Box component={Link} to="/" sx={{ position: 'absolute', top: 0, left: 0, padding: '0rem' }}>
                <img src={logo} alt="CartPool Logo" style={{ maxHeight: '200px' }} />
            </Box>

        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ mt: 8, py: 4, px: 2 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <img src={shoppingCartIcon} alt="Shopper" style={{height: 100 }} />
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
                        />
                    </Grid>
                    {/* Additional fields as necessary */}
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
            </Paper>
        </Container>
        </>
    );
};

export default ShopperSignUp;
