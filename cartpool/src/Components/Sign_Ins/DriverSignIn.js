// DriverSignIn.js
import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import carIcon from '../../assets/car.png';
import logo from '../../assets/cartpool_logo.png';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const DriverSignIn = () => {
    return (
        <>
        <Box component={Link} to="/" sx={{ position: 'absolute', top: 0, left: 0, padding: '0rem' }}>
                <img src={logo} alt="CartPool Logo" style={{ maxHeight: '200px' }} />
        </Box>

        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ mt: 8, py: 4, px: 1}}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <img src={carIcon} alt="Driver" style={{ width: 200}} />
                            <Typography variant="h5" gutterBottom>
                                Driver Sign-In
                            </Typography>
                        </Box>
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
                            autoFocus
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
                            autoComplete="current-password"
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
                            Sign In
                        </Button>
                        <Grid container justifyContent="center">
                    <Grid item>
                        <Link 
                            component={RouterLink} 
                            to="/driver-signup" 
                            variant="body2" 
                            sx={{ 
                                mt: 2, 
                                textDecoration: 'none', 
                                color: '#00bcd4', 
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#008394'
                                }
                            }}
                        >
                            Don't have an account? Sign up
                        </Link>
                    </Grid>
                </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        </>
    );
};

export default DriverSignIn;
