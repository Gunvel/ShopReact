import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const MessageText = styled(Typography)(({ theme }) => ({
    ...theme.typography.h7,
    whiteSpace: 'pre-wrap',
    color: theme.palette.primary.contrastText,
}));

export default MessageText;