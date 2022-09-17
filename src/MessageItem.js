import React from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const MessageContainer = styled(Stack)(({ theme, left = false }) => ({
    direction: 'row',
    justifyContent: left ? "flex-start" : "flex-end",
    alignItems: left ? "flex-start" : "flex-end",
    alignSelf: left ? "flex-start" : "flex-end",
    textAlign: left ? "start" : "end",
    backgroundColor: left ? theme.palette.primary.dark : theme.palette.primary.main,
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: '5px',
    maxWidth: '60%',

    ...theme.typography.body2,
    color: '#ffffff',
}));

/**
 * Компонент сообщения
 * @param {object} param0 пропы компонента
 * @returns Компонент сообщения
 */
function MessageItem({ author, message, currentAuthor }) {
    return (
        <MessageContainer left={currentAuthor}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {author}
            </Typography>
            <Typography variant="h7" whiteSpace='pre-wrap'>
                {message}
            </Typography>
        </MessageContainer>
    );
}

export default MessageItem;