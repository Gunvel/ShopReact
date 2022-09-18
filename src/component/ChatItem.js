import React from "react";
import { ListItem, IconButton, ListItemButton, ListItemIcon, ListItemText, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'

/**
 * Компонент элемента списка чатов
 * @param {any} param0 Пропсы компонента
 * @returns Компонент элемента списка чатов
 */
function ChatItem({ chatName, login, messageCount, onRemove }) {
    const navigate = useNavigate();

    const redirect = (chatName, login) => {
        navigate(`${chatName}/${login}`);
    }

    return (
        <ListItem sx={{
            paddingLeft: '0',
            paddingBottom: '0',
            paddingTop: '0',
        }}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={onRemove}>
                    <DeleteIcon />
                </IconButton>
            }>
            <ListItemButton onClick={() => redirect(chatName, login)}>
                <ListItemIcon>
                    <Badge badgeContent={messageCount} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary={chatName} />
            </ListItemButton>
        </ListItem>
    );
}

export default ChatItem;