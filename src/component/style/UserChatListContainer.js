import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const UserChatListContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'grid',
    gridTemplateRows: 'auto 1fr',
    width: '300px',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.secondary.light
}));

export default UserChatListContainer;