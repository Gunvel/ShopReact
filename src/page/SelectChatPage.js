import * as React from 'react';
import { Typography, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import chatIMG from '../assets/img/chats.png'

function SelectChatPage() {
    return (
        <Box sx={{ textAlign: 'center', margin: 'auto', padding: (theme) => theme.spacing(10) }}>
            <img
                width={'100%'}
                src={chatIMG}
                alt={"Chats"}
                loading="lazy" />
            <Typography variant="h4">
                To start a dialogue, create a chat <nobr>using <Box component={'span'}><AddCircleIcon color='primary' fontSize="large" /></Box> button</nobr> or select any of the available
            </Typography>
        </Box>

    );
}

export default SelectChatPage;