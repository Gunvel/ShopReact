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
     */
    constructor(author, message) {
        this.id = Message._currentId++;
        this.author = author;
        this.message = message;
    }
}

export default Message;