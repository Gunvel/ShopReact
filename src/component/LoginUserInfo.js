import React from "react";
import { Avatar } from '@mui/material';
import { LoginButton, TitleText } from './stylized';


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

function stringAvatar(name) {
    let text;
    if (!name || name.length == 0) {
        text = 'US';
    }
    else if (name.length == 1) {
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

function LoginUserInfo({ login }) {
    return (
        <LoginButton startIcon={<Avatar {...stringAvatar(login)} />}>
            <TitleText>{login}</TitleText>
        </LoginButton>
    );
}

export default LoginUserInfo;