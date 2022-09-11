import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function ChatList() {
    return (
        <Box component='span'
            sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                bottom: '10px'
            }}>
            <Button color='primary' variant="contained" sx={{
                marginBottom: '20px'
            }}>
                Добавить чат
            </Button>

            <List
                sx={{ width: '100%' }}
                component="nav">
                <ListItemButton>
                    <ListItemIcon>
                        <Badge badgeContent={10} color="primary">
                            <MailIcon color="action" />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Чат 1" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Badge badgeContent={10} color="primary">
                            <MailIcon color="action" />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Чат 2" />
                </ListItemButton>
            </List>
        </Box>
    );
}

export default ChatList;
