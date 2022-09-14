import React from "react";
import { ListItemButton, ListItemIcon, ListItemText, Badge } from '@mui/material';
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