import * as React from 'react';
import { AppContainer } from '../component/stylized';
import { Outlet } from 'react-router-dom';

/**
 * Фон приложения
 * @returns Фон приложения
 */
function Layout() {
    return (
        <AppContainer>
            <Outlet />
        </AppContainer>
    );
}

export default Layout;