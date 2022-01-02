import React, {useState} from 'react';
import styled from 'styled-components';
import {Drawer} from 'antd';
import {useTranslation} from 'react-i18next';
import {Header, FindCar, ReportIncludes} from './components/OptionA';
import {User} from './components/Authentication';
import {connect} from 'react-redux';
import {commonActions} from './store/actions';
import us_flag from './assets/flags-4x3/us.svg';
import il_flag from './assets/flags-4x3/il.svg';


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
                  <User />
                  <p onClick={() => changeLanguage('en')}>
                    <span>Change to English</span>
                    <img src={us_flag} alt={'us_flag'} height={20} style={{marginLeft: 5}} />
                  </p>
                  <p onClick={() => changeLanguage('he')}>
                    <span>Change to Hebrew</span>
                    <img src={il_flag} alt={'il_flag'} height={20} style={{marginLeft: 5}} />
                  </p>
                </Drawer>
          </Container>
      );
}

export default connect(null, commonActions)(App);
