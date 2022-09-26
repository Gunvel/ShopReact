import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './component';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode>  Не дает выставлять autoFocus для TextField в модальном окне (https://github.com/mui/material-ui/issues/33004) */}
      <App />
      {/* </React.StrictMode> */}
    </Router >
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
