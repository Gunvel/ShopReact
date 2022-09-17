/**
 * Объект чата
 */
class Chat {
    /**
     * Статическое поле для заданий уникальных Id при создании нового экземпляра чата
     */
    static _currentId = 0;
    /**
     * Конструктор класса чата
     * @param {string} chatName Название чата
     */
    constructor(chatName) {
        this.id = Chat._currentId++;
        this.chatName = chatName;
        this.messageCount = Math.floor(Math.random() * 150); // кол-во сообщение рандомно от 0 до 150
    }
}

export default Chat;