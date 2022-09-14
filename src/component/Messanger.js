import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SendIcon from '@mui/icons-material/Send';
import MessageItem from "./MessageItem";
import Message from "../object/Message";
import { Header } from './style';



/**
 * Компонент чата
 * @param {object} param0 Объект пропертей компонента
 * @returns Компонент чата
 */
function Messanger({ chatName, login }) {
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
     * Состояние списка сообщений
     */
    const [messageList, setMessageList] = useState([]);
    /**
     * Состояние вводимого текста
     */
    const [textState, setTextState] = useState('');

    /**
     * Эффекты при изменении списка сообщений
     */
    useEffect(() => {
        refWindow.current.scrollTop = refWindow.current.scrollHeight;

        if (messageList.length > 0 && messageList[messageList.length - 1].author === login) {
            let timeoutId = setTimeout(() => {
                sendMessage(botName, botMessage);
            }, delaySendMS);

            return () => clearTimeout(timeoutId);
        }
    }, [messageList]);

    /**
     * Обработчик вызывающий submit при нажатии Enter в textarea
     * @param {KeyboardEvent} event Аргумент события нажатия клавиши
     */
    const keyPress = (event) => {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();

            refForm.current.requestSubmit();
        }
    };

    /**
     * Обработчик submit формы
     * @param {SubmitEvent} event Аргумент события submit формы
     */
    const formSubmit = (event) => {
        event.preventDefault();

        if (sendMessage(login, textState)) {
            setTextState('');
            setInputFocus();
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
        if (message && message.length > 0 && message.trim()) {
            let mess = new Message(author, message);
            setMessageList(prevState => [...prevState, mess]);
            return true;
        }

        return false;
    };

    /**
     * Добавление фокуса полю ввода при отправки сообщения
     */
    const setInputFocus = () => {
        refInput.current.focus();
    };

    return (
        <Box component="span" mx='auto' my={0} sx={{
            maxWidth: 900,
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            borderRadius: 1
        }}>
            <Header>
                <Typography variant="h6" sx={{
                    alignSelf: 'center'
                }}>
                    {chatName}
                </Typography>
            </Header>

            <Stack spacing={1} ref={refWindow} overflow='auto' paddingTop={1} paddingLeft={2} paddingRight={2}>
                {messageList.map(
                    mess =>
                        <MessageItem
                            key={mess.id}
                            author={mess.author}
                            message={mess.message}
                            currentAuthor={login === mess.author} />)}
            </Stack>

            <Box>
                <form ref={refForm} onSubmit={formSubmit}>
                    <Grid container paddingTop={2} paddingBottom={2} spacing={1} paddingLeft={2} paddingRight={2}>
                        <Grid xs>
                            <TextField inputRef={refInput} label="Сообщение" placeholder="Введите сообщение..." color="primary" autoFocus maxRows={2} value={textState} multiline onKeyDown={keyPress} onChange={textChange} sx={{ width: '100%' }} />
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
            </Box>

        </Box>

    );
}

export default Messanger;