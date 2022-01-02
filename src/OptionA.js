import React, {useState} from 'react';
import styled from 'styled-components';
import {Drawer} from 'antd';
import {useTranslation} from 'react-i18next';
import {Header, FindCar, ReportIncludes} from './components/OptionA';
import {connect} from 'react-redux';
import {commonActions} from './store/actions';


const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`


const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

const App = ({changeLanguage}) => {
      const {t, i18n} = useTranslation();
      const [visible, setVisible] = useState(false);

      return (
          <Container>
                <Header openDrawer={() => setVisible(true)} />
                <Content>
                      <FindCar t={t} />
                      <ReportIncludes t={t} />
                </Content>
                <Drawer title="Basic Drawer" placement={i18n.dir() === 'rtl' ? 'right' : 'left'} onClose={() => setVisible(false)} visible={visible}>
                      <p onClick={() => changeLanguage('en')}>Change to English</p>
                      <p onClick={() => changeLanguage('he')}>Change to Hebrew</p>
                </Drawer>
          </Container>
      );
}

export default connect(null, commonActions)(App);
