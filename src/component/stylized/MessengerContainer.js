import { styled } from '@mui/material/styles';

const MessagerContainer = styled('div')(() => ({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto'
}));

export default MessagerContainer;