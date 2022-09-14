import React, { useRef, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MessageItem from "./MessageItem";
import Message from "./Message";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';


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
            setFocus();
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
    const setFocus = () => {
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
            <AppBar position="static">
                <Toolbar variant="dense" sx={{ gap: '20px' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                        {chatName}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h6" sx={{ my: 2 }}>
                        Login: {login}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Stack spacing={1} ref={refWindow} overflow='auto' paddingTop={1}>
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
                    <Grid container paddingTop={2} paddingBottom={2} spacing={1}>
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