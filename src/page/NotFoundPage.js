import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
 * Компонент не найденной страницы
 * @returns Компонент не найденной страницы
 */
function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Dialog open={true} onClose={() => navigate(-1)}>
            <DialogTitle>Страница не найдена</DialogTitle>
            <DialogContent>
                <DialogContentText >
                    Страница не найдена
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default NotFoundPage;