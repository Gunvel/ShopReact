import React, { useRef, useState, useEffect } from "react";
import { Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SendIcon from '@mui/icons-material/Send';
import MessageItem from "./MessageItem";
import Message from "../object/Message";
import { MessagerContainer, Header, TitleText, MessagesStack, TextFieldComplited } from './stylized';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../store/reducer/userReducer/userSelector";
import { chatsSelector } from "../store/reducer/chatsReducer/chatsSelector";
import { messagesSelector } from "../store/reducer/messagesReducer/messagesSelector";
import { ADD_MESSAGE } from "../store/actionType";

/**
 * Компонент чата
 * @param {object} param0 Объект пропертей компонента
 * @returns Компонент чата
 */
function Messanger() {
    /**
     * Имя робота отвечающего на сообщение пользователя
     */
    const botName = 'ROBOT';
    /**
     * Сообщение робота отвечающего на сообщение пользователя
     */
    const botMessage = 'I`m Robot. Hello World!';
    /**
     * Задержка перед ответом робота
     */
    const delaySendMS = 1500;

    /**
     * Ссылка на форму
     */
    const refForm = useRef();
    /**
     * Сслыка на окно с сообщения (для сдвига скрола)
     */
    const refWindow = useRef();
    /**
     * Сслыка на поле ввода (для автофокуса)
     */
    const refInput = useRef();

    /**
     * Состояние вводимого текста
     */
    const [textState, setTextState] = useState('');

    /**
     * Пользователь
     */
    const user = useSelector(userSelector);

    /**
     * Параметры строки запроса
     */
    const { id } = useParams();

    /**
     * Список чатов
     */
    const chats = useSelector(chatsSelector);
    /**
     * Выбранный чат
     */
    const currentChat = chats.find(ch => ch.id === +id);

    /**
     * Список сообщений
     */
    const messageList = useSelector(messagesSelector);
    /**
     * Список сообщений выбранного чата
     */
    const chatMessages = messageList.filter((ms) => {
        if (!id) return true;

        return ms.chatId === +id;
    });

    /**
     * Отправитель задачь в redux
     */
    const dispatch = useDispatch();

    /**
     * Функция навигации
     */
    const navigate = useNavigate();

    /**
     * Эффекты при изменении списка сообщений
     */
    useEffect(() => {
        refWindow.current.scrollTop = refWindow.current.scrollHeight;

        if (messageList.length > 0 && messageList[messageList.length - 1].author === user.name) {
            let timeoutId = setTimeout(() => {
                sendMessage(botName, botMessage);
            }, delaySendMS);

            return () => clearTimeout(timeoutId);
        }
    }, [messageList]);

    /**
     * При изменении чатов, для проверки существования выбранного
     */
    useEffect(() => {
        if (!currentChat)
            navigate('error');
    }, [chats]);

    /**
     * Обработчик submit формы
     * @param {SubmitEvent} event Аргумент события submit формы
     */
    const formSubmit = (event) => {
        event.preventDefault();

        if (sendMessage(user.name, textState)) {
            setTextState('');
            setInputFocus(refInput.current);
        }
    };

    /**
     * Обработчик события изменения текста в поле ввода
     * @param {Event} event Аргумент события изменения текста
     */
    const textChange = (event) => {
        setTextState(event.target.value);
    }

    /**
     * Функция отправки сообщения
     * @param {string} author Автор сообщения
     * @param {string} message Сообщение
     * @returns true - если сообщение отправлено, false - иначе
     */
    const sendMessage = (author, message) => {
        if (message && message.length > 0 && message.trim() && id) {
            let mess = new Message(author, message, +id);

            dispatch({
                type: ADD_MESSAGE,
                payload: mess
            });

            return true;
        }

        return false;
    };

    /**
     * Добавление фокуса полю ввода при отправки сообщения
     */
    const setInputFocus = (input) => {
        input.focus();
    };

    return (
        <MessagerContainer>
            <Header>
                <TitleText>{currentChat ? currentChat.chatName : 'Chat'}</TitleText>
            </Header>

            <MessagesStack ref={refWindow}>
                {chatMessages.map(
                    mess =>
                        <MessageItem
                            key={mess.id}
                            author={mess.author}
                            message={mess.message}
                            currentAuthor={user.name === mess.author} />)}
            </MessagesStack>

            <form ref={refForm} onSubmit={formSubmit}>
                <Grid container paddingTop={2} paddingBottom={2} spacing={1} paddingLeft={2} paddingRight={2}>
                    <Grid xs>
                        <TextFieldComplited
                            inputRef={refInput}
                            label="Message"
                            placeholder="Text a message"
                            color="primary"
                            autoFocus
                            maxRows={2}
                            value={textState}
                            multiline
                            onChange={textChange}
                            sx={{ width: '100%' }}
                            onComplete={() => refForm.current.requestSubmit()} />
                    </Grid>

                    <Grid xs="auto" display="flex" justifyContent="center" alignItems="center">
                        <Button type="submit" color="primary" variant="contained" endIcon={<SendIcon />} sx={{ width: '100%', height: '100%' }}>
                            <Typography variant="h7">
                                Send
                            </Typography>
                        </Button>
                    </Grid>

                </Grid>
            </form>
        </MessagerContainer>
    );
}

export default Messanger;