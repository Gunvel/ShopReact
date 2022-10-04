import * as React from 'react';
import { Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom'

function MainPage() {
    const location = useLocation();

    return (
        <Stack>
            <Link to={"/m/profile"} state={{ background: location }}>Профиль пользователя</Link>
            <Link to={"/chat"}>Перейти к чатам</Link>
            <Link to={"/counter"}>Перейти к счетчикам</Link>
            <Link to={"/comments"}>Перейти к комментариям</Link>
        </Stack>
    );
}

export default MainPage;