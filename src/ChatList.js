import React, { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chat from "./Chat";
import ChatItem from "./ChatItem";

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
        new Chat('Super CHAT')
    ]);

    return (
        <Box component='span' sx={{ width: '200px' }}>
            <Button color='primary' variant="contained" sx={{ marginBottom: '20px' }}>
                <Typography variant="h7">
                    Add chat
                </Typography>
            </Button>

            <List sx={{ width: '100%' }} component="nav">
                {chats.map(
                    ch => <ChatItem key={ch.id} chatName={ch.chatName} messageCount={ch.messageCount} />)}
            </List>
        </Box>
    );
}

export default ChatList;
