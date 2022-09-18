import * as React from 'react';
import { Stack } from '@mui/material';
import { AppContainer, ContentContainer, UserChatListContainer, Header } from './stylized';
import { Routes, Route, Outlet, Link } from 'react-router-dom'

function MainPage() {
    return (
        <Stack>
            <Link to={"/profile"}>Профиль пользователя</Link>
            <Link to={"/chat"}>Перейти к чатам</Link>
        </Stack>
    );
}

export default MainPage;