import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const LoginButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    boxSizing: 'border-box',
    textAlign: "start",
    justifyContent: 'flex-start'
}));

export default LoginButton;