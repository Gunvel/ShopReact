import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useNavigate } from "react-router-dom"

/**
 * Компонент профиля
 * @param {any} param0 пропсы компонента
 * @returns Компонент профиля
 */
function ProfileDialogPage() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    };

    return (
        <Dialog open={true} onClose={back}>
            <DialogTitle>User profile</DialogTitle>
            <DialogContent>
                <DialogContentText >
                    This is user profile
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={back}>Cancel</Button>
                <Button onClick={back}>Accept</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProfileDialogPage;