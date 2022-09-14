import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const Header = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    width: '100%',
    height: '70px',
    padding: '15px 15px',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 6px 1px 0px rgb(0 0 0 / 26%)',
    ...theme.typography.body2,
    color: '#ffffff',
}));

export default Header;