import * as React from 'react';
import Messanger from './Messanger';
import ChatList from './ChatList';
import LoginUserInfo from "./LoginUserInfo";
import User from '../object/User';
import ProfileDialog from './ProfileDialog';
import { AppContainer, ContentContainer, UserChatListContainer, Header } from './stylized';
import { Routes, Route, Outlet } from 'react-router-dom'

function ChatPage() {
    const user = new User('Sergey');
    const chatName = 'Custom chat';

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
                <Route index element={
                    <div>Выберите чат</div>
                } />
                <Route path={'/profile'} element={<ProfileDialog />} />
                <Route path={'/:chatName/:login'} element={<Messanger />} />
                <Route path={'*'} element={
                    <div>Чат не найден</div>
                } />
            </Route>
        </Routes >

        // <ContentContainer>
        //     <UserChatListContainer>
        //         <Header>
        //             <LoginUserInfo login={user.name} />
        //         </Header>
        //         <ChatList />
        //     </UserChatListContainer>

        //     <Messanger chatName={chatName} login={user.name} />
        // </ContentContainer>
    );
}

export default ChatPage;