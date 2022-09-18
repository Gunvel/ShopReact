import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

/**
 * Компонент диалога об удалении чата
 * @param {any} param0 пропсы компонента
 * @returns Компонент диалога об удалении чата
 */
function RemoveChatDialog({ openDialog, chat, onRemove, onCancel, ...props }) {
    return (
        <Dialog
            open={openDialog}
            onClose={onCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            {...props}>
            <DialogTitle id="alert-dialog-title">Removing a chat</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure to delete the chat{chat ? `: ${chat.chatName}` : ''}?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Disagree</Button>
                <Button onClick={onRemove} autoFocus>Agree</Button>
            </DialogActions>
        </Dialog>
    );
};

export default RemoveChatDialog;
