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
import OptionA from './OptionA';
import {SetPasswordForm} from './components/Authentication';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <WithTranslations>
          <BrowserRouter>
            <Routes>
              <Route path="/car-info-client" element={<OptionA />} />
              <Route path="/car-info-client/old" element={<App />} />
              <Route path="/car-info-client/set-password/:token" element={<SetPasswordForm />} />
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
