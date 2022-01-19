import React, {useState} from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {Header, FindCar, AdditionalInfo, Refund, ContactUs, Footer, DrawerSettings} from './components';
import {connect} from 'react-redux';
import {commonActions} from './store/actions';
import ReportViewer from './components/ReportViewer';

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

const App = ({changeLanguage, getReport, report}) => {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);

  return (
      <Container>
        <Header openDrawer={() => setVisible(true)} />
        <Content>
          <FindCar t={t} getReport={getReport} report={report} />
          <AdditionalInfo t={t} />
          <Refund t={t} />
          <ReportViewer t={t} />
          <ContactUs t={t} />
          <Footer t={t} />
        </Content>
        <DrawerSettings
            visible={visible}
            onClose={() => setVisible(false)}
            changeLanguage={changeLanguage}
        />
      </Container>
  );
}

export default connect(({common: {report}}) => ({report}), commonActions)(App);
