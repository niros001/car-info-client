import React, {useState} from 'react';
import styled from 'styled-components';
import {Divider, Drawer} from 'antd';
import {useTranslation} from 'react-i18next';
import {Header, FindCar, AdditionalInfo, Refund} from './components/OptionA';
import {User} from './components/Authentication';
import {connect} from 'react-redux';
import {commonActions} from './store/actions';
import us_flag from './assets/flags-4x3/us.svg';
import il_flag from './assets/flags-4x3/il.svg';
import ReportViewer from './components/OptionA/ReportViewer';


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

const OptionA = ({changeLanguage, getReport}) => {
      const {t, i18n} = useTranslation();
      const [visible, setVisible] = useState(false);

      return (
          <Container>
                <Header openDrawer={() => setVisible(true)} />
                <Content>
                  <FindCar t={t} getReport={getReport} />
                  <AdditionalInfo t={t} />
                  <Refund t={t} />
                  <ReportViewer t={t} />
                </Content>
                <Drawer
                    title="Basic Drawer"
                    width={250}
                    placement={i18n.dir() === 'rtl' ? 'right' : 'left'}
                    onClose={() => setVisible(false)}
                    visible={visible}
                >
                  <User />
                  <Divider />
                  <p onClick={() => changeLanguage('en')}>
                    <img src={us_flag} alt={'us_flag'} height={20} style={{marginLeft: 5}} />
                  </p>
                  <p onClick={() => changeLanguage('he')}>
                    <img src={il_flag} alt={'il_flag'} height={20} style={{marginLeft: 5}} />
                  </p>
                  <Divider />
                </Drawer>
          </Container>
      );
}

export default connect(({common: {report}}) => ({report}), commonActions)(OptionA);
