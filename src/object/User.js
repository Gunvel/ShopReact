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

        let userName = name && name.trim() && name.length > 0 ? name : 'User' + this.id; //Если переданно пустое имя, то будет записано UserID
        this.name = userName;
    }
}

export default User;