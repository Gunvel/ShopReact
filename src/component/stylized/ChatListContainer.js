import { styled } from '@mui/material/styles';

const ChatListContainer = styled('div')(() => ({
    width: '100%',
    height: '100%',
    display: 'grid',
    boxSizing: 'border-box',
    gridTemplateRows: '1fr auto',
    overflow: 'auto'
}));

export default ChatListContainer;