import React, { useState } from "react";
import { IconButton } from '@mui/material';
import Chat from "../object/Chat";
import ChatItem from "./ChatItem";
import AddChatDialog from "./AddChatDialog";
import RemoveChatDialog from "./RemoveChatDialog";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ChatListContainer, ListChats } from './stylized';
import { useSelector, useDispatch } from "react-redux";
import { ADD_CHAT, REMOVE_CHAT } from "../store/actionType";
import { chatsSelector } from "../store/reducer/chatsReducer/chatsSelector";

/**
 * Компонент списка чатов
 * @returns Компонент чата
 */
function ChatList() {
    /**
     * Список чатов
     */
    const chats = useSelector(chatsSelector);

    /**
     * Отправитель задачь в redux
     */
    const dispatch = useDispatch();

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

        dispatch({
            type: ADD_CHAT,
            payload: newChat
        });

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
        dispatch({
            type: REMOVE_CHAT,
            payload: chatToDelete.id
        });

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
                            chatId={ch.id}
                            chatName={ch.chatName}
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