import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography, Avatar, Button, Link } from '@mui/material';
import Messanger from './Messanger';
import ChatList from './ChatList';
import User from '../object/User';
import { Theme, AppContainer, ContentContainer, UserChatListContainer, Header } from './style';
import { Box } from '@mui/system';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function App() {
    const user = new User('Sergey');
    const chatName = 'Custom chat';

    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <AppContainer>
                    <ContentContainer>
                        <UserChatListContainer>
                            <Header>
                                <Button startIcon={<Avatar sx={{ width: 36, height: 36 }}>SE</Avatar>} sx={{
                                    color: 'white',
                                    textTransform: 'none',
                                    padding: '0',
                                    margin: 0,
                                }}>
                                    <Typography variant="h6">
                                        {user.name}
                                    </Typography>
                                </Button>
                            </Header>
                            <ChatList />
                        </UserChatListContainer>

                        <Messanger chatName={chatName} login={user.name} />
                    </ContentContainer>
                </AppContainer>
            </ThemeProvider>
        </React.Fragment >
    );
}

export default App;