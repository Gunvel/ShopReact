import { useEffect, useState } from 'react';
import { Stack, Card, CardContent, Button, Typography, Avatar, Backdrop, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { commentsSelector, commentsLoadingSelector, commentsErrorSelector } from "../store/reducer/commentsReducer/commentsSelector";
import { getComments } from "../store/reducer/commentsReducer/commentsReducer";


const CommentItem = ({ name, email, body }) => {
    const GetFirstChar = (ms) => {
        if (!ms || ms.length === 0) {
            return 'C';
        }

        return ms[0];
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: '600px', width: '100%' }}>
            <CardContent>
                <Stack flexDirection={'row'} gap={2}>
                    <Avatar sx={{ alignSelf: 'baseline', textTransform: 'uppercase' }}>{GetFirstChar(name)}</Avatar>
                    <Stack>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {email}
                        </Typography>
                    </Stack>
                </Stack>

                <Typography variant="body2">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
};

function CommentsPage() {
    const dispatch = useDispatch();
    const comments = useSelector(commentsSelector);
    const loading = useSelector(commentsLoadingSelector);
    const error = useSelector(commentsErrorSelector);
    const [update, forceUpdate] = useState({});

    useEffect(() => {
        dispatch(getComments());
    }, [update]);

    const hasError = () => {
        return error !== null;
    }

    const tryLoadPage = () => {
        forceUpdate({});
    };

    return (
        <Stack gap={1} alignItems={'center'}>
            {comments && comments.length > 0 && comments.map(
                comment =>
                    <CommentItem
                        key={comment.id}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body} />)}

            <Dialog
                aria-labelledby="customized-dialog-title"
                open={hasError()}>
                <DialogTitle id="customized-dialog-title">
                    {error}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        An error occurred while trying to get data from the server.
                    </Typography>
                    <Typography gutterBottom>
                        Check your network connection or contact the network administrator.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={tryLoadPage}>
                        Try again
                    </Button>
                </DialogActions>
            </Dialog>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Stack>
    );
}

export default CommentsPage;