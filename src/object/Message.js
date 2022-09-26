/**
 * Объект сообщения
 */
class Message {
    /**
     * Статическое поле для заданий уникальных Id при создании нового экземпляра сообщения
     */
    static _currentId = 0;
    /**
     * Конструктор класса сообщения
     * @param {string} author Автор
     * @param {string} message Сообщение
     * @param {int} chatId Id чата
     */
    constructor(author, message, chatId) {
        this.id = Message._currentId++;
        this.author = author;
        this.message = message;
        this.chatId = chatId;
    }
}

export default Message;