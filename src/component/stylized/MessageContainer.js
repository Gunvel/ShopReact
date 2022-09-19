import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const MessageContainer = styled(Stack)(({ theme, left = false }) => ({
    direction: 'row',
    justifyContent: left ? "flex-start" : "flex-end",
    alignItems: left ? "flex-start" : "flex-end",
    alignSelf: left ? "flex-start" : "flex-end",
    textAlign: left ? "start" : "end",
    backgroundColor: left ? theme.palette.primary.dark : theme.palette.primary.main,
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: '5px',
    maxWidth: '60%',
}));

export default MessageContainer;