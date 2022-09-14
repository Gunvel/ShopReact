import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const ContentContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    width: '100%',
    maxWidth: '1200px',
    height: '100%',
    alignSelf: 'center',
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.dark
}));

export default ContentContainer;