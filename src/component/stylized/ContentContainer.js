import { styled } from '@mui/material/styles';

const ContentContainer = styled('div')(({ theme }) => ({
    height: '100%',
    alignSelf: 'center',
    margin: theme.spacing(0),
    display: 'grid',
    gridTemplateColumns: 'minmax(50px, 300px) minmax(250px, 900px)',
    gridAutoRows: '100%',
    backgroundColor: theme.palette.secondary.main
}));

export default ContentContainer;