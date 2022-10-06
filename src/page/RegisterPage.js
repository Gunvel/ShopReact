import { useState, useEffect } from 'react';
import { Stack, Button, Typography, Box, TextField, Link, Backdrop, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, userLoadingSelector, userErrorSelector } from "../store/reducer/userReducer/userSelector";
import { registerProgress } from "../store/reducer/userReducer/userReducer";

function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const error = useSelector(userErrorSelector);
    const loading = useSelector(userLoadingSelector);

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(() => {
        if (user) {
            navigate('/chat');
        }
    }, [user])

    const validateForm = () => {
        if (!displayName || displayName.length === 0 || !displayName.trim()) {
            return false;
        }

        if (!email || email.length === 0 || !email.trim()) {
            return false;
        }

        if (!password || password.length === 0 || !password.trim()) {
            return false;
        }

        if (!passwordConfirm || passwordConfirm.length === 0 || !passwordConfirm.trim()) {
            return false;
        }

        if (password !== passwordConfirm) {
            return false;
        }

        return true;
    };

    /**
     * Обработчик регистрации
     * @param {SubmitEvent} e form event args
     */
    const registerHandler = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        dispatch(registerProgress(email, password, displayName));
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

                    {error &&
                        <Typography>
                            {error}
                        </Typography>
                    }

                    <TextField
                        id="filled-email"
                        label="Email"
                        type="email"
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

                    <TextField
                        id="filled-passwordConfirm-input"
                        label="Password confirm"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)} />


                    <TextField
                        id="filled-displayName"
                        label="Display name"
                        type="search"
                        variant="outlined"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)} />

                    <Button type='submit' variant="contained">Sign Up</Button>
                </Stack>
            </Box>
            <Box padding={4} boxSizing={'border-box'} sx={{ background: (theme) => theme.palette.secondary.dark }}>
                <Link href="/" underline="hover">
                    Already have an account?
                </Link>
            </Box>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Stack>
    );
}

export default RegisterPage;