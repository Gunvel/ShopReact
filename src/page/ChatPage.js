import * as React from 'react';
import { Messanger, ChatList, LoginUserInfo } from '../component';
import { ContentContainer, UserChatListContainer, Header } from '../component/stylized';
import { Routes, Route, Outlet } from 'react-router-dom';
import SelectChatPage from './SelectChatPage';
import ChatNotFoundPage from "./ChatNotFoundPage";

function ChatPage() {
    return (
        <Routes>
            <Route path={'/'} element={
                <ContentContainer>
                    <UserChatListContainer>
                        <Header>
                            <LoginUserInfo />
                        </Header>
                        <ChatList />
                    </UserChatListContainer>

                    <Outlet />
                </ContentContainer>
            }>
                <Route index element={<SelectChatPage />} />
                <Route path={'/:id'} element={<Messanger />} />
                <Route path={'*'} element={<ChatNotFoundPage />} />
            </Route>
        </Routes >
    );
}

export default ChatPage;