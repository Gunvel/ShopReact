import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const Header = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    width: '100%',
    height: '70px',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 6px 1px 0px rgb(0 0 0 / 26%)',
    overflow: 'hidden'
}));

export default Header;