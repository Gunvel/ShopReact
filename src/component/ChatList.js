import React, { useState } from "react";
import { IconButton } from '@mui/material';
import Chat from "../object/Chat";
import ChatItem from "./ChatItem";
import AddChatDialog from "./AddChatDialog";
import RemoveChatDialog from "./RemoveChatDialog";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ChatListContainer, ListChats } from './stylized';

/**
 * Компонент списка чатов
 * @returns Компонент чата
 */
function ChatList({ login }) {
    /**
     * Состояние списка чатов
     */
    const [chats, setChats] = useState([
        new Chat('Chat with Ivan'),
        new Chat('Custom chat'),
        new Chat('Party time'),
        new Chat('Super CHAT')
    ]);

    /**
     * Состояние демонстрации окна добавления чата
     */
    const [addDialogView, setAddDialogView] = useState(false);

    /**
     * Чат выбранный на удаление
     */
    const [chatToDelete, setChatToDelete] = useState(null);

    /**
     * Состояние демонстрации окна удаления чата
     */
    const [removeDialogView, setRemoveDialogView] = useState(false);

    /**
     * Обработчик вызова окна добавления чата
     */
    const callAddChatDialog = () => {
        setAddDialogView(true);
    };

    /**
     * Обработчик добавления чата
     * @param {string} name Имя чата
     */
    const addChat = (name) => {
        let newChat = new Chat(name);
        setChats(prevState => [...prevState, newChat]);

        setAddDialogView(false);
    };

    const cancelAddChat = () => {
        setAddDialogView(false);
    };

    const callRemoveChatDialog = (chat) => {
        setChatToDelete(chat);
        setRemoveDialogView(true);
    };

    const removeChat = () => {
        let filtred = chats.filter(ch => ch.id !== chatToDelete.id);
        setChats(filtred);

        setRemoveDialogView(false);
        setChatToDelete(null);
    };

    const cancelRemoveChat = () => {
        setRemoveDialogView(false);
        setChatToDelete(null);
    };

    return (
        <ChatListContainer>
            <ListChats>
                {chats.map(
                    ch =>
                        <ChatItem
                            key={ch.id}
                            chatName={ch.chatName}
                            login={login}
                            messageCount={ch.messageCount}
                            onRemove={() => callRemoveChatDialog(ch)} />)}
            </ListChats>

            <IconButton
                onClick={callAddChatDialog}
                color='primary'
                aria-label="Add new chat"
                size="large"
                sx={{ justifySelf: 'flex-start', marginLeft: '10px' }}>
                <AddCircleIcon fontSize="large" />
            </IconButton>

            <AddChatDialog
                openDialog={addDialogView}
                onAdd={addChat}
                onCancel={cancelAddChat} />

            <RemoveChatDialog
                openDialog={removeDialogView}
                chat={chatToDelete}
                onRemove={removeChat}
                onCancel={cancelRemoveChat} />

        </ChatListContainer>
    );
}

export default ChatList;