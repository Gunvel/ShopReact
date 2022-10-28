import { useState, useEffect } from 'react';
import { Stack, Button, Typography, Box, TextField, Link, Backdrop, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, userLoadingSelector, userErrorSelector } from "../store/reducer/userReducer/userSelector";
import { loginProgress } from "../store/reducer/userReducer/userReducer";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const error = useSelector(userErrorSelector);
    const loading = useSelector(userLoadingSelector);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user) {
            navigate('/chat');
        }
    }, [user])

    const validateForm = () => {
        if (!email || email.length === 0 || !email.trim()) {
            return false;
        }

        if (!password || password.length === 0 || !password.trim()) {
            return false;
        }

        return true;
    };

    /**
     * Обработчик авторизации
     * @param {SubmitEvent} e form event args
     */
    const logInHandler = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        dispatch(loginProgress(email, password));
    }

    return (
        <Stack component={"div"} sx={{
            maxWidth: '500px',
            width: '100%',
            margin: '10% auto',
            background: (theme) => theme.palette.secondary.light
        }}>
            <Box padding={4} boxSizing={'border-box'} textAlign='center'>
                <Stack component={'form'} gap={2} onSubmit={logInHandler}>
                    <Typography variant='h3' mb={4}>
                        Log in to CHAT
                    </Typography>

                    {error &&
                        <Typography>
                            {error}
                        </Typography>
                    }

                    <TextField
                        id="filled-email"
                        label="Email"
                        type="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <Button type='submit' variant="contained">Log In</Button>
                </Stack>
            </Box>
            <Box padding={4} boxSizing={'border-box'} sx={{ background: (theme) => theme.palette.secondary.dark }}>
                <Link href="/register" underline="hover">
                    New user?
                </Link>
            </Box>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Stack >
    );
}

export default LoginPage;