import { useEffect } from "react";
import { Avatar, Stack, IconButton, Tooltip, Backdrop, CircularProgress } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { LoginButton, TitleText } from './stylized';
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { userSelector, userLoadingSelector, userErrorSelector } from "../store/reducer/userReducer/userSelector";
import { logoutProgress } from "../store/reducer/userReducer/userReducer";

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
function LoginUserInfo() {
    /**
     * Пользователь
     */
    const user = useSelector(userSelector);
    const error = useSelector(userErrorSelector);
    const loading = useSelector(userLoadingSelector);

    /**
     * Локация приложения
     */
    const location = useLocation();
    const dispatch = useDispatch();
    /**
     * Функция навигации
     */
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user])

    /**
     * Обработчик открытия профиля
     */
    const openProfile = () => {
        navigate('/m/profile', {
            state: {
                background: location
            }
        });
    };

    const logoutHandler = (e) => {
        e.preventDefault();

        dispatch(logoutProgress());
    };

    return (
        <Stack
            width='100%'
            direction='row'
            justifyContent="space-between">
            <Tooltip title="Open profile" arrow disableInteractive>
                <LoginButton startIcon={<Avatar {...stringAvatar(user?.displayName)} />} onClick={() => openProfile()}>
                    <TitleText>{user?.displayName}</TitleText>
                </LoginButton>
            </Tooltip>

            <Tooltip title="Logout" arrow disableInteractive>
                <IconButton color="secondary" aria-label="delete" onClick={logoutHandler}>
                    <LogoutIcon />
                </IconButton>
            </Tooltip>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Stack>
    );
}

export default LoginUserInfo;