import * as React from 'react';
import { Messanger, ChatList, LoginUserInfo } from '../component';
import { ContentContainer, UserChatListContainer, Header } from '../component/stylized';
import { Routes, Route, Outlet } from 'react-router-dom';

function ChatPage() {
    return (
        <Routes>
            <Route path={'/'} element={
                <ContentContainer>
                    <UserChatListContainer>
                        <Header>
                            <LoginUserInfo/>
                        </Header>
                        <ChatList />
                    </UserChatListContainer>

                    <Outlet />
                </ContentContainer>
            }>
                <Route index element={<div>Выберите чат</div>} />
                <Route path={'/:id'} element={<Messanger />} />
                <Route path={'*'} element={<div>Чат не найден</div>} />
            </Route>
        </Routes >
    );
}

export default ChatPage;