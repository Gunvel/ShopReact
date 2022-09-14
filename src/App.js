import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Stack } from '@mui/system';
import Messanger from './Messanger';
import ChatList from './ChatList';

const currentTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const login = 'Sergey';
  const chatName = 'Custom chat';

  return (
    <React.Fragment>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Stack direction='row' sx={{
          width: '100vw',
          height: '100vh',
          padding: '10px',
          boxSizing: 'border-box'
        }}>
          <ChatList></ChatList>

          <Messanger chatName={chatName} login={login} />
        </Stack>
      </ThemeProvider>
    </React.Fragment >
  );
}

export default App;
