import { styled } from '@mui/material/styles';
import { List } from '@mui/material';

const ListChats = styled(List)(({ theme }) => ({
    overflow: 'auto',
    boxSizing: 'border-box',
    padding: theme.spacing(0),
    margin: theme.spacing(0)
}));

export default ListChats;