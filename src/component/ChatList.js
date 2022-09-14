import React, { useState } from "react";
import { Box, List, IconButton, Typography } from '@mui/material';
import Chat from "../object/Chat";
import ChatItem from "./ChatItem";
import AddCircleIcon from '@mui/icons-material/AddCircle';

/**
 * Компонент списка чатов
 * @returns Компонент чата
 */
function ChatList() {
    /**
     * Состояние списка чатов
     */
    const [chats, setСhats] = useState([
        new Chat('Chat with Ivan'),
        new Chat('Custom chat'),
        new Chat('Party time'),
        new Chat('Super CHAT'),
        new Chat('Chat with Ivan'),
        new Chat('Custom chat'),
        new Chat('Party time'),
        new Chat('Super CHAT'),

        // new Chat('Chat with Ivan'),
        // new Chat('Custom chat'),
        // new Chat('Party time'),
        // new Chat('Super CHAT'),
        // new Chat('Chat with Ivan'),
        // new Chat('Custom chat'),
        // new Chat('Party time'),
        // new Chat('Super CHAT'),
        // new Chat('Chat with Ivan'),
        // new Chat('Custom chat'),
        // new Chat('Party time'),
        // new Chat('Super CHAT'),
        // new Chat('Chat with Ivan'),
        // new Chat('Custom chat'),
        // new Chat('Party time'),
        // new Chat('Super CHAT'),
        // new Chat('Chat with Ivan'),
        // new Chat('Custom chat'),
        // new Chat('Party time'),
        // new Chat('Super CHAT'),
        // new Chat('Chat with Ivan'),
        // new Chat('Custom chat'),
        // new Chat('Party time'),
        // new Chat('Super CHAT'),
    ]);

    return (
        <Box component='div' sx={{
            width: '100%',
            height: '100%',
            display: 'grid',
            boxSizing: 'border-box',
            gridTemplateRows: '1fr auto',
            overflow: 'auto',
        }}>

            <List sx={{
                overflow: 'auto',
                boxSizing: 'border-box'
            }}>
                {chats.map(
                    ch => <ChatItem key={ch.id} chatName={ch.chatName} messageCount={ch.messageCount} />)}
            </List>

            <IconButton color='primary' aria-label="Add new chat" size="large" sx={{ margin: '20px', justifySelf: 'flex-start' }}>
                {/* <Typography variant="h7">
                    Add chat
                </Typography> */}
                <AddCircleIcon fontSize="large" />
            </IconButton >

        </Box>
    );
}

export default ChatList;