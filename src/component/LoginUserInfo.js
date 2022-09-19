import React from "react";
import { Avatar } from '@mui/material';
import { LoginButton, TitleText } from './stylized';
import { useNavigate } from 'react-router-dom'

/**
 * Преобразует текст в цвет
 * @param {string} string текст преобразуемый в цвет
 * @returns Цвет
 */
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

/**
 * Функция получает сокращеное имя пользователя (первые 2 буквы)
 * @param {string} name имя пользователя
 * @returns Сокращенное имя пользователч
 */
function stringAvatar(name) {
    let text;
    if (!name || name.length === 0) {
        text = 'US';
    }
    else if (name.length === 1) {
        text = name[0];
    }
    else {
        text = name[0] + name[1];
    }

    return {
        sx: {
            width: 42,
            height: 42,
            textTransform: 'uppercase',
            bgcolor: stringToColor(text),
        },
        children: text,
    };
}

/**
 * Компонент логина пользователя
 * @param {any} param0 Пропсы компонента
 * @returns Компонент логина пользователя
 */
function LoginUserInfo({ login }) {
    /**
     * Функция новигации
     */
    const navigate = useNavigate();

    return (
        <LoginButton startIcon={<Avatar {...stringAvatar(login)} />} onClick={() => navigate('profile')}>
            <TitleText>{login}</TitleText>
        </LoginButton>
    );
}

export default LoginUserInfo;