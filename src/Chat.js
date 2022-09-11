import React, { useRef, useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import Message from "./Message";


/**
 * Компонент чата
 * @param {object} param0 Объект пропертей компонента
 * @returns Компонент чата
 */
function Chat({ login }) {
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

    return (
        <div className='b-chat'>
            <div className='b-chat__header'>
                <div className='b-chat__title'>CHAT</div>
                <div className='b-chat__login'>Login: {login}</div>
            </div>

            <div className='b-chat__window' ref={refWindow}>
                {messageList.map(
                    mess =>
                        <MessageItem
                            key={mess.id}
                            author={mess.author}
                            message={mess.message}
                            currentAuthor={login === mess.author} />)}
            </div>

            <form className='b-chat__form' ref={refForm} onSubmit={formSubmit}>
                <textarea autoFocus placeholder="Введите сообщение..." value={textState} onKeyPress={keyPress} onChange={textChange} />
                <button>
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.763 511.763">
                        <path d="M511.716,9.802c-0.107-0.853-0.213-1.707-0.533-2.56c-0.107-0.32-0.213-0.747-0.32-1.067
				c-0.533-1.173-1.28-2.24-2.133-3.2c-0.96-0.853-2.027-1.6-3.2-2.133c-0.32-0.107-0.747-0.32-1.067-0.32
				c-0.853-0.213-1.707-0.427-2.56-0.427c-0.427,0-0.747,0-1.173,0c-0.96,0-2.027,0.213-2.987,0.533
				c-0.213,0.107-0.427,0.107-0.64,0.213h-0.107L6.436,213.962c-5.44,2.347-7.893,8.64-5.547,14.08c0.96,2.24,2.667,4.053,4.8,5.12
				l178.347,94.4l94.507,178.347c1.813,3.52,5.44,5.653,9.387,5.76h0.427c4.053-0.107,7.68-2.667,9.387-6.4L510.969,14.815v-0.107
				c0.107-0.213,0.107-0.427,0.213-0.64c0.32-0.96,0.533-1.92,0.533-2.987C511.716,10.655,511.822,10.228,511.716,9.802z
				M35.342,224.522l418.88-182.08l-264.107,264L35.342,224.522z M287.182,476.362l-81.92-154.773l264-264.107L287.182,476.362z"/>
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default Chat;