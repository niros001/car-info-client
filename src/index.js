import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WithTranslations from './WithTranslations';
import store from './store';
import App from './App';
import {SetPasswordForm} from './components/Authentication';
import {ReportsHistory} from './components';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <WithTranslations>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/reports-history" element={<ReportsHistory />} />
              <Route path="/set-password/:token" element={<SetPasswordForm />} />
            </Routes>
          </BrowserRouter>
        </WithTranslations>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
