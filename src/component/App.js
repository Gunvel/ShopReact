import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Messanger from './Messanger';
import ChatList from './ChatList';
import LoginUserInfo from "./LoginUserInfo";
import User from '../object/User';
import { Theme, AppContainer, ContentContainer, UserChatListContainer, Header } from './stylized';

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
                                <LoginUserInfo login={user.name} />
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