import * as React from 'react';
import { Typography, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import chatIMG from '../assets/img/chatLost.png'

function ChatNotFoundPage() {
    return (
        <Box sx={{ textAlign: 'center', margin: '10% auto', padding: (theme) => theme.spacing(10) }}>
            <img
                width={'60%'}
                src={chatIMG}
                alt={"Chats"} />
            <Typography variant="h4">
                The requested chat could not be found. Try reloading the page or contact support
            </Typography>
        </Box>

    );
}

export default ChatNotFoundPage;