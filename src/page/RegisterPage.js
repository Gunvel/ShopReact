import * as React from 'react';
import { Stack, Button, Typography, Box, TextField, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const navigate = useNavigate();

    /**
     * 
     * @param {SubmitEvent} e form event args
     */
    const registerHandler = (e) => {
        e.preventDefault();

        navigate(`/chat`);
    }


    return (
        <Stack component={"div"} sx={{
            maxWidth: '500px',
            width: '100%',
            margin: '10% auto',
            background: (theme) => theme.palette.secondary.light
        }}>
            <Box padding={4} boxSizing={'border-box'} textAlign='center'>
                <Stack component={'form'} gap={2} onSubmit={registerHandler}>
                    <Typography variant='h3' mb={4}>
                        Sign up to CHAT
                    </Typography>

                    <TextField
                        id="filled-search"
                        label="Login"
                        type="search"
                        variant="outlined" />

                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined" />

                    <Button type='submit' variant="contained">Sign Up</Button>
                </Stack>
            </Box>
            <Box padding={4} boxSizing={'border-box'} sx={{ background: (theme) => theme.palette.secondary.dark }}>
                <Link href="/" underline="hover">
                    Already have an account?
                </Link>
            </Box>
        </Stack >
    );
}

export default RegisterPage;