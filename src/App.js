import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Chat from './Chat';
import { Stack } from '@mui/system';
import ChatList from './ChatList';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const login = 'Sergey';

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Stack direction='row' sx={{
          width: '100vw',
          height: '100vh',
          padding: '10px 10px 10px 120px',
          boxSizing: 'border-box',
          justifyItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <ChatList></ChatList>

          <Chat login={login} />
        </Stack>
      </ThemeProvider>
    </React.Fragment >
  );
}

export default App;
