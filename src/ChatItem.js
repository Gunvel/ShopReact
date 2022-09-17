import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function ChatItem({ chatName, messageCount }) {
    return (
        <ListItemButton>
            <ListItemIcon>
                <Badge badgeContent={messageCount} color="primary">
                    <MailIcon color="action" />
                </Badge>
            </ListItemIcon>
            <ListItemText primary={chatName} />
        </ListItemButton>
    );
}

export default ChatItem;