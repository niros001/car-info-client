import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {authActions, commonActions} from './store/actions';
import {Header, Footer, DrawerSettings} from './components';
import {Home} from './components/Home';
import {Reports} from './components/Reports';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 50px;
`

const App = ({changeLanguage, reLogged}) => {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('email')) {
      reLogged()
    }
  }, [reLogged])

  return (
      <Container>
        <Header openDrawer={() => setVisible(true)} />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports-history" element={<Reports />} />
          </Routes>
        </Content>
        <Footer t={t} />
        <DrawerSettings
            visible={visible}
            onClose={() => setVisible(false)}
            changeLanguage={changeLanguage}
        />
      </Container>
  );
}

export default connect(({common: {report}}) => ({report}), {...authActions, ...commonActions})(App);
