import { styled } from '@mui/material/styles';

const AppContainer = styled('main')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    margin: theme.spacing(0),
    padding: theme.spacing(2),
    boxSizing: 'border-box'
}));

export default AppContainer;