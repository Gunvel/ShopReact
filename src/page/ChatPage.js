import * as React from 'react';
import { Messanger, ChatList, LoginUserInfo } from '../component';
import User from '../object/User';
import { ContentContainer, UserChatListContainer, Header } from '../component/stylized';
import { Routes, Route, Outlet } from 'react-router-dom';

function ChatPage() {
    const user = new User('Sergey');

    return (
        <Routes>
            <Route path={'/'} element={
                <ContentContainer>
                    <UserChatListContainer>
                        <Header>
                            <LoginUserInfo login={user.name} />
                        </Header>
                        <ChatList login={user.name} />
                    </UserChatListContainer>

                    <Outlet />
                </ContentContainer>
            }>
                <Route index element={<div>Выберите чат</div>} />
                <Route path={'/:chatName/:login'} element={<Messanger />} />
                <Route path={'*'} element={<div>Чат не найден</div>} />
            </Route>
        </Routes >
    );
}

export default ChatPage;