import * as React from "react";
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Theme } from './stylized';
import { Routes, Route } from 'react-router-dom';
import { Layout, MainPage, ChatPage, NotFoundPage, ProfileDialogPage, CounterPage } from '../page';

/**
 * Приложение
 * @returns Приложение
 */
function App() {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <Routes location={background || location}>
                    <Route path={'/'} element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route exact path={"/m/profile"} element={<ProfileDialogPage />} />
                        <Route exact path={'/chat/*'} element={<ChatPage />} />
                        <Route exact path={'/counter'} element={<CounterPage />} />
                        <Route path={'*'} element={<NotFoundPage />} />
                    </Route>
                </Routes>

                {/* Навигация для модальных окон */}
                {background && (
                    <Routes>
                        <Route path={"/m/*"} >
                            <Route path={"profile"} element={<ProfileDialogPage />} />
                            <Route path={'*'} element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;