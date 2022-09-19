import { styled } from '@mui/material/styles';

const UserChatListContainer = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.secondary.dark
}));

export default UserChatListContainer;