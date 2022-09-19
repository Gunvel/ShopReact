import React from "react";
import { TextField } from '@mui/material';

/**
 * Компонент TextField вызывающий обработчик по нажатию Enter
 * @param {any} param0 пропсы компонента
 * @returns Компонент TextField вызывающий обработчик по нажатию Enter
 */
function TextFieldComplited({ onComplete, ...props }) {
    /**
     * Обработчик вызывающий submit при нажатии Enter в textarea
     * @param {KeyboardEvent} event Аргумент события нажатия клавиши
     */
    const keyPress = (event) => {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();

            onComplete();
        }
    };

    return (
        <TextField {...props} onKeyDown={keyPress} />
    );
};

export default TextFieldComplited;