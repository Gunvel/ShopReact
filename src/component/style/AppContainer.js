import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const AppContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    width: '100vw',
    height: '100vh',
    padding: '20px 16px',
    boxSizing: 'border-box'
}));

export default AppContainer;