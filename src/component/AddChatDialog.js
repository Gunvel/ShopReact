import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import TextFieldComplited from "./stylized/TextFieldComplited";

/**
 * Компонент диалога об добавлении чата
 * @param {any} param0 Пропсы компонента
 * @returns Компонент диалога об добавлении чата
 */
function AddChatDialog({ openDialog, onAdd, onCancel, ...props }) {
    /**
     * Состояние имени чата
     */
    const [newChatName, setNewChatName] = useState("");

    /**
     * Добавить чат
     */
    const addChat = () => {
        let name = newChatName;
        setNewChatName('');
        onAdd(name);
    };

    return (
        <Dialog
            open={openDialog}
            onClose={onCancel}
            {...props}>
            <DialogTitle>Adding a chat</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter the name of the chat.
                </DialogContentText>
                <TextFieldComplited
                    autoFocus
                    value={newChatName}
                    onChange={(e) => setNewChatName(e.target.value)}
                    margin="dense"
                    id="name"
                    label="Chat name"
                    fullWidth
                    variant="standard"
                    onComplete={addChat} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={addChat}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddChatDialog;
