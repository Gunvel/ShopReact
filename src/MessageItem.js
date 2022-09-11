import React from "react";

/**
 * Компонент сообщения
 * @param {object} param0 пропы компонента
 * @returns Компонент сообщения
 */
function MessageItem({ author, message, currentAuthor }) {
    return (
        <div className={`b-chatMessage  ${!currentAuthor ? 'b-chatMessage_otherAuthor' : ''}`}>
            <div className="b-chatMessage__author">{author}</div>
            <div className="b-chatMessage__message">{message}</div>
        </div>
    );
}

export default MessageItem;