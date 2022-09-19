import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const MessageAuthor = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
}));

export default MessageAuthor;