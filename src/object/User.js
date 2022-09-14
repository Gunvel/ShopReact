/**
 * Объект пользователя
 */
class User {
    /**
     * Статическое поле для заданий уникальных Id при создании нового экземпляра объекта пользователя
     */
    static _currentId = 0;
    /**
     * Конструктор класса пользователя
     * @param {string} name Имя пользователя
     */
    constructor(name) {
        this.id = User._currentId++;
        this.name = name;
    }
}

export default User;