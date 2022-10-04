import { styled } from '@mui/material/styles';

const AppContainer = styled('main')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    margin: theme.spacing(0),
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    background: "radial-gradient(circle at center, #fbfcfe , #f3f6f7)"
}));

export default AppContainer;