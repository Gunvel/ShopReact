import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const MessagesStack = styled(Stack)(({ theme }) => ({
    overflow: 'auto',
    padding: theme.spacing(2),
    gap: theme.spacing(1)
}));

export default MessagesStack;