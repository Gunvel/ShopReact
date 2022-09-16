import React from "react";
import { MessageContainer, MessageAuthor, MessageText } from './stylized';

/**
 * Компонент сообщения
 * @param {object} param0 пропы компонента
 * @returns Компонент сообщения
 */
function MessageItem({ author, message, currentAuthor }) {
    return (
        <MessageContainer left={currentAuthor}>
            <MessageAuthor>{author}</MessageAuthor>
            <MessageText>{message}</MessageText>
        </MessageContainer>
    );
}

export default MessageItem;