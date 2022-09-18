import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Theme } from './stylized';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import MainPage from './MainPage';
import ProfileDialog from './ProfileDialog';
import ChatPage from './ChatPage';
import PageNotFound from './PageNotFound';

/**
 * Приложение
 * @returns Приложение
 */
function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path={'/profile'} element={<ProfileDialog />} />
                        <Route exact path={'/chat/*'} element={<ChatPage />} />
                        <Route path={'*'} element={<PageNotFound />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </React.Fragment >
    );
}

export default App;