import * as React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

function CounterPage() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <Stack component={"div"} flexDirection='row' gap={2}>
            <Button variant="outlined" onClick={() => dispatch({ type: 'plus' })}>+</Button>
            <Button variant="outlined" onClick={() => dispatch({ type: 'minus' })}>-</Button>
            <Typography alignSelf={'center'}>
                {count}
            </Typography>
        </Stack>
    );
}

export default CounterPage;