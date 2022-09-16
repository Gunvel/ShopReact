import React, { useState } from "react";
import { List, IconButton } from '@mui/material';
import Chat from "../object/Chat";
import ChatItem from "./ChatItem";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ChatListContainer, ListChats } from './stylized';

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
        <ChatListContainer>
            <ListChats>
                {chats.map(
                    ch => <ChatItem key={ch.id} chatName={ch.chatName} messageCount={ch.messageCount} />)}
            </ListChats>

            <IconButton color='primary' aria-label="Add new chat" size="large" sx={{ justifySelf: 'flex-start', marginLeft: '10px' }}>
                <AddCircleIcon fontSize="large" />
            </IconButton >

        </ChatListContainer>
    );
}

export default ChatList;