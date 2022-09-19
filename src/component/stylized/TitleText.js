import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const TitleText = styled(Typography)(({ theme }) => ({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textTransform: 'none',
    alignSelf: 'center',
    ...theme.typography.h6,
    color: theme.palette.primary.contrastText
}));

export default TitleText;